/* eslint-disable import/no-default-export */
import React from "react"

import { Row, Col } from "."

export default {
  title: "UI/grid",
}

export const component = () => <>
  <Row>
    <Col>1 of 4</Col>
    <Col>3 of 4</Col>
    <Col>3 of 4</Col>
    <Col>4 of 4</Col>
  </Row>
</>

export const definedSizesColumns = () => <>
  <Row>
    <Col size={2}>2 of 12</Col>
    <Col size={4}>4 of 12</Col>
    <Col size={3}>3 of 12</Col>
    <Col size={3}>3 of 12</Col>
  </Row>
</>
