// @flow

// $FlowFixMe
import {ReactComponent as LogoSvg} from "./logo.svg";
import * as React from "react";

type Props = {
    size?: string,
    ...
}

export const Logo = ({size = '64', ...rest}: Props) => <LogoSvg  {...rest} witdh={size} height={size} fill={'black'}/>

