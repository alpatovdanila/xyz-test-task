/* eslint-disable import/no-default-export */
import React from "react"

import {FlexItem, Flex, spacingToClassName} from "."
import {withKnobs, select, boolean} from "@storybook/addon-knobs";

export default {
  title: "UI/Layout",
  decorators:[withKnobs]
}

export const FlexContainer = () => <Flex
    spacing={select('Spacing between items', Object.keys(spacingToClassName), 0)}
    col={boolean('As column', false)}
    alignCenter={boolean('alignCenter', false)}
    valignCenter={boolean('valignCenter', false)}
    block={boolean('block', false)}
>
  <FlexItem>Item1<br/>Multiline</FlexItem>
  <FlexItem>Item2</FlexItem>
  <FlexItem>Item3</FlexItem>
  <FlexItem>Item4<br/>Multiline</FlexItem>
</Flex>


