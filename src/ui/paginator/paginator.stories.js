import React from "react"
import {withKnobs, text, boolean, number, } from "@storybook/addon-knobs";
import {Paginator} from "./index"

export default {
    title: "UI/Paginator",
    decorators: [withKnobs]
}

export const component = () => (
    <Paginator pagesCount={number("Total pages", 12)} currentPage={number("Selected page", 1)} onPageSelect={() => {
    }}/>
)
