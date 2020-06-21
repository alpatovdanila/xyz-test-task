// @flow
import * as React from 'react';
import {Flex, FlexItem} from "../../ui/layout";
import {Link} from "../../ui/link";
import config from "../../config";

import {TextLabel} from "../../ui/text-label";


export const Footer = () => {
    return (
        <Flex block alignCenter>
            <FlexItem><TextLabel><Link href={`${config.appUrl}/storybook/index.html`} target={"_blank"}>Storybook</Link></TextLabel></FlexItem>
        </Flex>
    )
}