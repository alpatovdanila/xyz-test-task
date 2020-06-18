/* eslint-disable import/no-default-export */
import React from "react"

import { FadedAway } from "./index"
import {Repository} from "../repository";
import mockData from "../repository/mockData";

export default {
  title: "UI/FadedAway",
}

export const component = () => <FadedAway><Repository repository={mockData}/></FadedAway>
