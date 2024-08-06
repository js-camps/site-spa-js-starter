// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'antd';
import { FormButton } from '../components/common';

import 'antd/dist/antd.css';

export default { title: 'Form Button' };

export const basicUsage = () => <FormButton buttonText="hello" />;

export const usageWithAnt = () => <Button>Submit</Button>;
