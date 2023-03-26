import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from "../../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Imput/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'LargeButton',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'MediumButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'SmallButton',
};

export const Send = Template.bind({});
Send.args = {
  label: 'Send',
  endIcon: <SendIcon/>
};

export const Delete = Template.bind({});
Delete.args = {
  label: 'Delete',
  startIcon: <DeleteIcon/>
};