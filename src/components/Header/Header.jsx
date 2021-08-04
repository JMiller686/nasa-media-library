import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../NASA-Logo-PNG.png';

import './Header.scss';

const Header = ({onSearch, searchParam}) => {
    return (
        <header>
            <div className="header-content">
            <div className="logo-wrap">
                <img src={Logo} alt="logo" className="logo"/>
                <span>Josh's Space Library</span>
            </div>
                
                <SearchBar onSearch={onSearch} searchParam={searchParam}/>
            </div>
        </header>
    )
}

export default Header