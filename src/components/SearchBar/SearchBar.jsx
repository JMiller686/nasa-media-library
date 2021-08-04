import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { IoSearch } from "react-icons/io5";

import './SearchBar.scss';

const SearchBar = () => {
    return (
        <Form>
            <div className='search-wrap'>
                <Form.Control size="lg" type="text" placeholder='Search for ...(e.g. "Gemini")' className="search-bar" />
                <Button size="lg" className="searchButton"><IoSearch /></Button>
            </div>
        </Form> 
    )
}

export default SearchBar;
