// @flow
// Replaces github's :emoji_literal: with real emoji images
import type {EmojisSlice} from "../store/types/common";

export const emojify = (text:string, emojis:EmojisSlice): ?string => {

    if(text) return text.replace(/:(\S+?):/gm, (match,group)=>{
        return emojis[group] ? `<img src="${emojis[group]}" class="gitmoji">` : match;
    });

    return null;
}