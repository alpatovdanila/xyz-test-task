// @flow
import * as React from 'react';

import {StarOutline} from "../icon";
import {TextLabel} from "../text-label";
import {Flex, FlexItem} from "../layout";


export const StarsCount = ({stars}:{stars:number}) => {

    return <Flex spacing={2} alignItems={"center"}>
        <FlexItem>
            <TextLabel>
                <StarOutline size={18} fill="currentColor"/>
            </TextLabel>
        </FlexItem>
        <FlexItem>
            <TextLabel>{stars}</TextLabel>
        </FlexItem>
    </Flex>
}