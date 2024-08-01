// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import RenderHomePage from './RenderHomePage';

// eslint-disable-next-line react/prop-types
function HomeContainer({ LoadingComponent }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      setTimeout(() => {
        let info = { name: 'Richard' };
        setUserInfo(info);
      }, 1000); // Simulate a delay
    };

    fetchUserInfo();
  }, []);

  return !userInfo || !userInfo.name ? (
    <LoadingComponent message="... Fetching user profile" />
  ) : (
    <RenderHomePage userInfo={userInfo} />
  );
}

export default HomeContainer;
