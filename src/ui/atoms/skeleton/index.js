//@flow
import * as React from "react";
import styled, {keyframes} from "styled-components";

type Props = {
    size?: number,
}

const skeletonKeyframes = keyframes`
  from {
    background: rgba(128,128,128,1);
  }
  to {
    background: rgba(128,128,128,0.5);
  }
`;

export const Skeleton: React.ComponentType<Props> = styled.div`
    width:100%;
    background:red;
    height:${props => props.height ? props.height : '32px'};
    animation:${skeletonKeyframes} .8s ease alternate infinite;
`;


