import { createContext, useContext } from 'react';

interface ISearchContext {
    search: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
    search: '',
    onChange: () => {},
});

SearchContext.displayName = 'SearchContext';

export const useSearch = () => useContext(SearchContext);
