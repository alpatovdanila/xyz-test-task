import * as React from 'react';
import {ThemeContext} from "styled-components";
import {StarOutline} from "../icon";
import {TextLabel} from "../text-label";
import {Flex, FlexItem} from "../layout";


export const StarsCount = ({stars}) => {
    const theme = React.useContext(ThemeContext);
    return <Flex spacing={2} alignItems={"center"}>
        <FlexItem>
            <StarOutline size={18} fill={theme.colors.gray2}/>
        </FlexItem>
        <FlexItem>
            <TextLabel>{stars}</TextLabel>
        </FlexItem>
    </Flex>
}