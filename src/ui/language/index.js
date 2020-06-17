import * as React from 'react';
import {Circle} from "../icon";
import {TextLabel} from "../text-label";
import {Flex, FlexItem} from "../layout";
import colors from 'github-language-colors/colors.json';

const getLanguageColor = language => colors[language] ? colors[language] : 'black';

export const Language = ({language}) => (<Flex spacing={2} alignItems={"center"}>
    <FlexItem>
        <Circle size={18} fill={getLanguageColor(language)}/>
    </FlexItem>
    <FlexItem>
        <TextLabel>{language}</TextLabel>
    </FlexItem>
</Flex>)