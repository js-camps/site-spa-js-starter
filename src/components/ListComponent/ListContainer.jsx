// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Items from "./ListItems";

const ListContainer = () => {
    const [items, setItems] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        function fetchNotes() {
            // Simulating a fetch operation
            setItems([
                { id: '1', img_url: 'https://web-design-s3.s3.us-east-2.amazonaws.com/images/samples/TLA30D1A+copy.jpg', img_description: 'example' },
                { id: '2', img_url: 'https://web-design-s3.s3.us-east-2.amazonaws.com/images/samples/Pkg+MTC28.jpg', img_description: 'example' }
            ]);
            setFetching(false);
        }
        fetchNotes();
    }, []); // Added empty dependency array to avoid infinite loop

    if (isFetching) {
        return <div>...loading items</div>;
    } else {
        return <Items items={items} />;
    }
};

export default ListContainer;


