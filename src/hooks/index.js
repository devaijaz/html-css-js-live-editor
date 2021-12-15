import {useState, useEffect} from 'react';

const prefix = 'codemirror-ls-';
export function useLocalStorage(key, intialValue='') {
    const storageKey = `${prefix}${key}`;
    const [value, setvalue] = useState(function() {
        const storedValue = localStorage.getItem(storageKey);
        if(storedValue) {
            return JSON.parse(storedValue);
        }
        if(typeof intialValue=="function") {
            return intialValue();
        }
        return intialValue;
    });
    
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [storageKey, value]);

    return [value, setvalue];

}