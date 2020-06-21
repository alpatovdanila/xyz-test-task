import type {SearchSlice} from "./search";



export type EmojisSlice = Object;

export type Language = {
    name:string,
    aliases: string[],
}

export type LanguagesSlice = Language[];

export type ApplicationSlice = {
    errors:[],
}

export type RootSlice = {
    languages:LanguagesSlice,
    emojis:EmojisSlice,
    search:SearchSlice,
    application:ApplicationSlice,
}