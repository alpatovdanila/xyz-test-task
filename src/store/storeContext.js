// @flow
import * as React from "react";
import type {RootSlice} from "./types/common";
import type {DispatchFunction} from "./types";
export const storeContext = React.createContext<{state?:RootSlice, dispatch?:DispatchFunction}>({});