import { useContext } from 'react';

import SearchContext from '../context/SearchContext';

const useSearchContext = () => {
    const context = useContext(SearchContext);

    return context;
};

export default useSearchContext;
