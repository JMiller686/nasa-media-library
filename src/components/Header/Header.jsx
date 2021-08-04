import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../NASA-Logo-PNG.png';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-content">
            <div className="logo-wrap">
                <img src={Logo} alt="logo" className="logo"/>
                <span>Josh's Space Library</span>
            </div>
                
                <SearchBar/>
            </div>
        </header>
    )
}

export default Header
