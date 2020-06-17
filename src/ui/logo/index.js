import {ReactComponent as LogoSvg} from "./logo.svg";
import * as React from "react";

export const Logo = ({size='64', fill = 'black', ...rest}) => <LogoSvg witdh={size} height={size} fill={fill} {...rest}/>

