/* eslint-disable import/no-default-export */
import React from "react"

import { Error } from "./index"
import {text, withKnobs} from "@storybook/addon-knobs";

export default {
  title: "UI/Error",
  decorators:[withKnobs]
}

export const component = () => <Error>{text('Error message', 'Something went wrong')}</Error>
