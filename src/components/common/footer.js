// @flow
import * as React from 'react';
import {Flex, FlexItem} from "../../ui/layout";

import {Link} from "../../ui/link";
import config from "../../config";
import {FadedAway} from "../../ui/faded-away";
import {TextLabel} from "../../ui/text-label";


export const Footer = () => {
    return (
        <Flex block alignCenter>
            <FlexItem><TextLabel><Link href={`${config.appUrl}/storybook/`}>Storybook</Link></TextLabel></FlexItem>
        </Flex>
    )
}