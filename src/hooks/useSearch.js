import { useState } from 'react';
import { useApi } from '../api/useApi';


export const useSearch = () => {
  const [searchText, setSearchText] = useState('')
  const { data, isLoaded, setQuery, setData } = useApi();

  const onSearchInput = (e) => {
    setSearchText(e.target.value.trimStart());
  };
  const onSearchStart = () => setQuery(searchText);

  return {
    data,
    setData,
    isLoaded,
    searchText,
    onSearchInput,
    onSearchStart,
  }
}