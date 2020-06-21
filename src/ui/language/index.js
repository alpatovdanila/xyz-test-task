// @flow
import * as React from 'react';
import {Circle} from "../icon";
import {TextLabel} from "../text-label";
import {Flex, FlexItem} from "../layout";

// $FlowFixMe
import colors from 'github-language-colors';

type Props = {language:string}

const getLanguageColor = (language:string) : string => colors[language] ? colors[language] : 'black';

export const Language = ({language}: Props) => (<Flex spacing={2} alignItems={"center"}>
    <FlexItem>
        <Circle size={18} fill={getLanguageColor(language)}/>
    </FlexItem>
    <FlexItem>
        <TextLabel>{language}</TextLabel>
    </FlexItem>
</Flex>)