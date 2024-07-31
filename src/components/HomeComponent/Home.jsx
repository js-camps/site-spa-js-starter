import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { HomePage } from "../pages";

function Home({ LoadingComponent }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = () => {
            setTimeout(() => {
                let info = { name: "Richard" };
                setUserInfo(info);
            }, 1000); // Simulate a delay
        };

        fetchUserInfo();
    }, []);

    return (!userInfo || !userInfo.name)
        ? <LoadingComponent message="... Fetching user profile" />
        : <HomePage userInfo={userInfo} />;
}

// Define PropTypes
Home.propTypes = {
    LoadingComponent: PropTypes.elementType.isRequired,
};

export default Home;
