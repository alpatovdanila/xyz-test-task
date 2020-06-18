/* eslint-disable import/no-default-export */
import React from "react"

import { ForksCount } from "."
import {withKnobs, number} from "@storybook/addon-knobs";

export default {
  title: "UI/ForksCount",
  decorators:[withKnobs()]
}

export const component = () => <ForksCount forks={number('Forks count', 999)}/>
