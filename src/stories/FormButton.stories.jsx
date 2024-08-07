// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'antd';
import { FormButton } from '../components/common';

import markdown from './story_descriptions/buttonNotes.md';

import 'antd/dist/antd.css';

export default {
    title: 'Form Button',
    component: FormButton,
    parameters: {
      docs: {
        // Use the imported Markdown as page description or notes
        description: {
          component: markdown,
        },
      },
    },
  };
// export default { title: 'Form Button' };

export const basicUsage = () => <FormButton buttonText="hello" />;

export const usageWithAnt = () => <Button htmlType="submit">Submit</Button>;
