// eslint-disable-next-line no-unused-vars
import React from 'react';

import { getExampleData } from "../../api";

import { List } from '../common';
import RenderExampleList from './RenderExampleList';

const ExampleList = () => {
    return (
        <List
            getItemsData={getExampleData}
            LoadingComponent={() => <div>Loading Items...</div>}
            RenderItems={RenderExampleList}
        />
    );
}

export default ExampleList;
