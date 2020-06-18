/* eslint-disable import/no-default-export */
import React from "react"

import {FlexItem, Flex, spacingToClassName} from "./index"
import {withKnobs, select, boolean} from "@storybook/addon-knobs";

export default {
  title: "UI/Layout",
  decorators:[withKnobs]
}

const Space = ({children}) => <div style={{backgroundColor:'slategray', border:`2px solid white`}}>{children}</div>

export const FlexContainer = () => <Flex
    spacing={select('Spacing between items', [2, 4, 8, 16, 20, 24, 28, 32, 48], 0)}
    col={boolean('As column', false)}
    alignCenter={boolean('alignCenter', false)}
    valignCenter={boolean('valignCenter', false)}
    block={boolean('block', false)}
    wrap={boolean('Allow items wrapping', false)}
>
  <FlexItem><Space>Item1<br/>Multiline</Space></FlexItem>
  <FlexItem><Space>Item2</Space></FlexItem>
  <FlexItem><Space>Item3</Space></FlexItem>
  <FlexItem><Space>Item4<br/>Multiline</Space></FlexItem>
</Flex>

export const asGrid = () => <Flex block>
  <FlexItem col={3}><Space>col=3</Space></FlexItem>
  <FlexItem col={4}><Space>col=4</Space></FlexItem>
  <FlexItem col={2}><Space>col=2</Space></FlexItem>
  <FlexItem col={3}><Space>col=3</Space></FlexItem>
</Flex>


