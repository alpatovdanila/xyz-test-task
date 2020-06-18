/* eslint-disable import/no-default-export */
import React from "react"

import { StarsCount } from "."
import {withKnobs, number} from "@storybook/addon-knobs";

export default {
  title: "UI/StarsCount",
  decorators:[withKnobs()]
}

export const component = () => <StarsCount stars={number('Stars count', 999)}/>
