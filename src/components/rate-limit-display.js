//@flow
import * as React from 'react';
import type {RateLimit} from "../api/useGithubEndpoint";



export const RateLimitDisplay = ({limit} : RateLimit) => {
    return <>{limit.remaining} of {limit.limit} request{limit.remaining>1 && 's'} remaining, next limit reset at: {new Date(limit.reset*1000).toLocaleTimeString()}</>
}