/* eslint-disable import/no-default-export */
import React from "react"
import { Language } from "./index"
import {withKnobs, select} from "@storybook/addon-knobs";
import colors from 'github-language-colors/colors.json';
export default {
    title: "UI/Language",
    decorators:[withKnobs]
}

export const Component = () => <Language language={select('Language', Object.keys(colors), 'JavaScript')}/>
