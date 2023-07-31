import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchType, setSearchQuery, setSearchResults } from '../../redux/actions';
import './Search.css';

const Search = () => {
    const searchType = useSelector((state) => state.searchType);
    const searchQuery = useSelector((state) => state.searchQuery);
    const searchResults = useSelector((state) => state.searchResults);
    const dispatch = useDispatch();

    const handleSearchTypeChange = (event) => {
        dispatch(setSearchType(event.target.value));
    };

    const handleSearchQueryChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    const performSearch = async () => {
        try {
            const response = await axios.get(`https://api.github.com/search/${searchType}`, {
                params: {
                    q: searchQuery,
                },
            });

            const data = response.data.items || [];

            dispatch(setSearchResults(data));
        } catch (error) {
            console.error('Error fetching data from GitHub API:', error);
            dispatch(setSearchResults([]));
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
            dispatch(setSearchResults([]));
        } else {
            performSearch();
        }
    };

    return (
        <div className="Search-container">
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                        placeholder="Enter your search query..."
                        className="search-field"
                    />
                    <select value={searchType} onChange={handleSearchTypeChange} className="dropdown">
                        <option value="users">User</option>
                        <option value="repositories">Repository</option>
                    </select>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="search-results-container">
                {searchResults.length > 0 ? (
                    <div className='card-contanier'>
                        {searchResults.map((result) => (
                            <div key={result.id}>
                                {searchType === 'users' ? (
                                    <div className='card-style'>
                                        <div><strong>User:</strong></div> {result.login}
                                        <img className="avatar" src={result.avatar_url} alt="avatar" />
                                    </div>
                                ) : (
                                    <div className='card-style'>
                                        <strong>Repository:</strong> {result.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
