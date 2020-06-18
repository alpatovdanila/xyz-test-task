const RECEIVE_LANGUAGES = '@languages/receive';

export const receiveLanguages = languages => ({type:RECEIVE_LANGUAGES, payload:{languages}});

export const languagesReducer = (state, action) => {
    if(action.type === RECEIVE_LANGUAGES) return {...state, ...action.payload.languages};
    return state;
}