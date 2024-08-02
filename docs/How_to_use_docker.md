# How to Bookmarking volumes in Docker

The bookmarking volumes in Docker refers to mounting volumes, which allows you to persist data or share data between your host system and the Docker container. This is particularly useful for development environments where you want changes made on the host to be reflected in the container in real-time.

## Approach 1: Manually Handle Node Modules

To use volumes with your Docker container, you can specify them with the `-v` option in the `docker run` command. This can be used to mount a directory from your host into the container.

For example, if you want to mount your current working directory into the `/app` directory of your container, you can do the following:

**Dockerfile**

Ensure your Dockerfile is set up correctly to handle the application as before:

-   Dockerfile.dev

```Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:20-slim

# Install build tools
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Create and set a non-root user for better security
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Set HOME environment variable to /app to avoid permission issues
ENV HOME=/app

# Switch to root user to set permissions
USER root

# Ensure correct permissions for the /app directory
RUN chown -R appuser:appgroup /app

# Switch to non-root user to install dependencies
USER appuser

# Install dependencies including dev dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=appuser:appgroup . .

# Ensure the output directory exists and adjust permissions
RUN mkdir -p dist && chown -R appuser:appgroup /app

# Switch back to non-root user
USER appuser

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application with host option
CMD ["sh", "-c", "npm run dev -- --host"]
```

**Steps to Build and Run**:

1.  Build the Docker Image:

```sh
docker build -f Dockerfile.dev -t vita-react-display .
```

2.  Run the Docker Container with Volume Mounting and Correct Port Mapping:

```sh
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules vita-react-display
```

## Approach 2: Use Docker Compose

Docker Compose can help manage volumes and dependencies more effectively. Here's how you can set it up:

`docker-compose.yml`

Create a `docker-compose.yml` file:

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

**Steps to Use Docker Compose**

1.  Build the Docker Image Using Docker Compose:

```sh
docker-compose build
```

2.  Run the Docker Container Using Docker Compose:

```sh
docker-compose up
```

3. Stop and Remove Services with Docker Compose Down:

If your Docker Compose setup is currently running, you should see output in your terminal from the running services.

Open a new terminal window or use the existing one and navigate to the directory containing your `docker-compose.yml` file. Then, run the following command:

```sh
docker-compose down
```

**Note**: Ensure `package.json` `dev` script allows passing additional options:

```json
"scripts": {
    "dev": "vite --host",
  },
```
