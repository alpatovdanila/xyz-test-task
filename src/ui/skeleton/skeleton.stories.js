/* eslint-disable import/no-default-export */
import React from "react"
import { Skeleton } from "."
import {text, withKnobs} from '@storybook/addon-knobs'

export default {
    title: "UI/Skeleton",
    decorators:[withKnobs]
}

export const Component = () => (
    <Skeleton height={text('Size CSS value', '32px', )}/>
);
