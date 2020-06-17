import * as React from 'react';
import {ThemeContext} from "styled-components";
import {Fork} from "../icon";
import {TextLabel} from "../text-label";
import {Flex, FlexItem} from "../layout";


export const ForksCount = ({forks}) => {
    const theme = React.useContext(ThemeContext);
    return <Flex spacing={2} verticalAlign={"middle"}>
        <FlexItem>
            <Fork fill={theme.colors.gray2}/>
        </FlexItem>
        <FlexItem>
            <TextLabel>{forks}</TextLabel>
        </FlexItem>
    </Flex>

}