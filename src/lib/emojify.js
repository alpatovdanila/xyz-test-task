// Replaces github's :emoji_literal: with real emoji images
export const emojify = (text, emojis) => {

    if(text) return text.replace(/:(\S+?):/gm, (match,group)=>{
        return emojis[group] ? `<img src="${emojis[group]}" class="gitmoji">` : match;
    });

    return null;
}