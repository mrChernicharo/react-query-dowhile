# this is what our reactQuery hook call looksLike

{status: 'loading', isLoading: true, isSuccess: false, isError: false, isIdle: false, …}

```
{
    data: undefined
    dataUpdatedAt: 0
    error: null
    errorUpdatedAt: 0
    failureCount: 0
    isError: false
    isFetched: false
    isFetchedAfterMount: false
    isFetching: true
    isIdle: false
    isLoading: true
    isLoadingError: false
    isPlaceholderData: false
    isPreviousData: false
    isRefetchError: false
    isRefetching: false
    isStale: true
    isSuccess: false
    refetch: ƒ ()
    remove: ƒ ()
    status: "loading"
}
```

{status: 'success', isLoading: false, isSuccess: true, isError: false, isIdle: false, …}

```
{
    data: Array(5)
    0: {id: 1, name: 'Felipe'}
    1: {id: 2, name: 'Mari'}
    2: {id: 3, name: 'Scott'}
    3: {id: 4, name: 'jojo'}
    4: {id: 5, name: 'Maurício'}
    length: 5
    dataUpdatedAt: 1638464330235
    error: null
    errorUpdatedAt: 0
    failureCount: 0
    isError: false
    isFetched: true
    isFetchedAfterMount: true
    isFetching: false
    isIdle: false
    isLoading: false
    isLoadingError: false
    isPlaceholderData: false
    isPreviousData: false
    isRefetchError: false
    isRefetching: false
    isStale: true
    isSuccess: true
    refetch: ƒ ()
    remove: ƒ ()
    status: "success"
}
```

### It will by default make a new request everytime you're back to the app after having switched tabs

```
export const useFetchPlayers = () => {
	return useQuery('players', fetchPlayers, { refetchOnWindowFocus: false });
};
```
