import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import Logo from '../../../assets/img/Logo.png'
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <a href='/'><img src={Logo} alt='Logo Casa Verde'></img></a>
                    </div>
                    <div className='header-nav'>
                        <Navigation />
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;