/* eslint-disable import/no-default-export */
import React from "react"
import { Search, Circle, Fork, StarOutline } from "."
import {withKnobs, color, number} from "@storybook/addon-knobs";

export default {
    title: "UI/Icon",
    decorators:[withKnobs]
}

export const Variants = () => <>
    <Search size={number('Size in px', 24)} fill={color('Fill color', 'black')}/>
    <Circle size={number('Size in px', 24)} fill={color('Fill color', 'black')}/>
    <Fork size={number('Size in px', 24)} fill={color('Fill color', 'black')}/>
    <StarOutline size={number('Size in px', 24)} fill={color('Fill color', 'black')}/>
</>

