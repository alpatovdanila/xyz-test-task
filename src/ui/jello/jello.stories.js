/* eslint-disable import/no-default-export */
import React from "react"
import {Jello} from "./index"
import {H1} from "../heading";
import {withKnobs, boolean} from "@storybook/addon-knobs";


export default {
    title: "UI/Jello",
    decorators:[withKnobs]
}

export const Component = () => <Jello infinite={boolean('Infinite', true)}><H1>Wow!</H1></Jello>

