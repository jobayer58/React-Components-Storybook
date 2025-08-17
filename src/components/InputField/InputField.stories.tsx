import React from "react";
// import { Meta, Story } from "@storybook/react";
import InputField from "./InputField";
import type { Meta } from "@storybook/react-vite";
// import type { Story } from "storybook/internal/csf";
import type { StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/InputField",
  component: InputField,
} as Meta;

const Template: StoryFn<any> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  placeholder: "Enter your name",
};

export const Error = Template.bind({});
Error.args = {
  label: "Name",
  placeholder: "Enter your name",
  errorMessage: "This field is required",
  invalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Name",
  placeholder: "Enter your name",
  disabled: true,
};
