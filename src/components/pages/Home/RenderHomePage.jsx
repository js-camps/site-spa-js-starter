// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderHomePage(props) {
  const {
    // eslint-disable-next-line react/prop-types
    userInfo,
    // authService
  } = props;
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      {/* eslint-disable-next-line react/prop-types */}
      <h3>Hi {userInfo.name}, you are more than welcome!</h3>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles</Link>
        </p>
        <p>
          <Button
            buttonText="Logout"
            // handleClick={() => authService.logout()}
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
