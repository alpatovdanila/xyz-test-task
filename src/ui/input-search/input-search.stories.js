/* eslint-disable import/no-default-export */
import React from "react"
import {InputText} from "."
import {boolean} from "@storybook/addon-knobs";

export default {
  title: "UI/input-text",
}

export const component = () => <InputText placeholder={'Placeholder text'}/>
export const transparent = () => <InputText transparent placeholder={'Placeholder text'}/>
