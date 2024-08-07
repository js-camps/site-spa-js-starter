import markdown from './story_descriptions/FormButton.md';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'antd';
import { FormButton } from '../components/common';

import 'antd/dist/antd.css';

export default { title: 'Form Button', parameters: { notes: markdown } };

export const exampleFormButton = () => <FormButton buttonText="hello" />;

export const antFormButton = () => <Button htmlType="submit">Submit</Button>;
