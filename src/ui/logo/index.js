import {ReactComponent as LogoSvg} from "./logo.svg";
import * as React from "react";

export const Logo = ({size='64', ...rest}) => <LogoSvg witdh={size} height={size} fill={'black'} {...rest}/>

