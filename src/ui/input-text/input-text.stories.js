/* eslint-disable import/no-default-export */
import React from "react"
import {InputText} from "."
import {withKnobs, boolean} from "@storybook/addon-knobs";


export default {
  title: "UI/InputText",
  decorators:[withKnobs]
}

export const component = () => <InputText placeholder={'Placeholder text'} block={boolean('Block-sized', false)} transparent={boolean('Transparent', false)}/>
