import Logo from '../../assets/images/NASA-Logo-PNG.png';

import './Header.scss';

const Header = ({children}) => {
    return (
        <header>
            <div className="header-content">
            <div className="logo-wrap">
                <img src={Logo} alt="logo" className="logo"/>
                <span>Josh's Space Library</span>
            </div>
                {children}
            </div>
        </header>
    )
}

export default Header
