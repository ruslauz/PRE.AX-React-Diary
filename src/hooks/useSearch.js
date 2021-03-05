import { useCallback, useMemo, useState } from 'react';
import { useApi } from '../api/useApi';


export const useSearch = () => {
  const [searchText, setSearchText] = useState('')
  const { data, isLoaded, setQuery, setData } = useApi();

  const onSearchInput = useCallback((e) => {
    setSearchText(e.target.value.trimStart());
  }, []);
  const onSearchStart = useCallback(() => setQuery(searchText), [setQuery, searchText]);

  const returnData = useMemo(() => ({
    data,
    setData,
    isLoaded,
    searchText,
    onSearchInput,
    onSearchStart, }), [data, isLoaded, onSearchStart, searchText, setData, onSearchInput])

  return returnData
}