import { ChangeEvent, createContext, useContext } from 'react';

interface ISearchContext {
    search: string;
    onSearchChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const SearchContext = createContext<ISearchContext>({
    search: '',
    onSearchChange: () => {},
});

SearchContext.displayName = 'SearchContext';

export const useSearch = () => useContext(SearchContext);
