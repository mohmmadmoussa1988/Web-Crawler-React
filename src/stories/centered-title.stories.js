import React from "react";

import CenteredTitle from "../components/centered-title/centered-title";

export default {
  title: "Components/CenteredTitle",
  component: CenteredTitle,
  argTypes: {
    children: { control: "text", defaultValue: "Title" },
  },
};

const Template = (args) => <CenteredTitle>{args["children"]}</CenteredTitle>;

export const Default = Template.bind({});
