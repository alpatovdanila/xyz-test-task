/* eslint-disable import/no-default-export */
import React from "react"
import { List } from "."
import {ListItem} from "../list-item";

export default {
    component:List,
    title: "UI/List",
}

export const Component = () => (
    <List>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
        <ListItem>List item 4</ListItem>
        <ListItem>List item 5</ListItem>
    </List>
);

