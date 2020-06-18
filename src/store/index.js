import * as React from "react";

const useEmojis = () => {
    const [emojis, setEmojis] = React.useState({});
    const fetch = async () => {}
    return {emojis, fetch}
}

const useLanguages = () => {
    const [languages, setLanguages] = React.useState({});
    const fetch = async () => {}
    return {languages, fetch}
}

const useSearch = (getStore) => {
    const [results, setResults] = React.useState(null);
    const [fetching, setFetching] = React.useState(false);
    const fetch = async () => {
        getStore().ui.addError('error');
    }

    return {results, fetching, setFetching, fetch};
}

const useUI = (store) => {
    const [errors, setErrors] = React.useState([]);

    const addError = (text) => setErrors([...errors, text])

    return {errors, addError}
}

export const useStore = () => {
    const store = {
        ui:useUI(() => store),
        search:useSearch(() => store),
        emojis:useEmojis(() => store),
        languages:useLanguages(() => store),
    }
    return store;
};

const storeContext = React.createContext();