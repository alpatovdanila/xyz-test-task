/* eslint-disable import/no-default-export */
import React from "react"
import { Logo } from "./index"
import {withKnobs, number} from "@storybook/addon-knobs";

export default {
    title: "UI/Logo",
    decorators:[withKnobs]
}

export const Component = () => <Logo size={number('Size in px', 64)}/>

