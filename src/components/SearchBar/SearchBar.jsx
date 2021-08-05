import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { IoSearch } from "react-icons/io5";

import './SearchBar.scss';

const SearchBar = ({onSearch, searchQuery, onSearchSubmit}) => {
    return (
        <Form onSubmit={onSearchSubmit}>
            <div className='search-wrap'>
                <Form.Control 
                    size="lg" 
                    type="text" 
                    value={searchQuery}
                    placeholder='Search for ...(e.g. "Gemini")' 
                    className="search-bar" 
                    onChange={onSearch}/>
                <Button size="lg" className="searchButton" type="submit"><IoSearch /></Button>
            </div>
        </Form> 
    )
}

export default SearchBar;
