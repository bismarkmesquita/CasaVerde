import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <ul>
                <li>
                    <Link to='/'><a>Como fazer</a></Link>
                </li>
                <li>/</li>
                <li>
                    <Link to='/'><a>Ofertas</a></Link>
                </li>
                <li>/</li>
                <li>
                    <Link to='/'><a>Depoimentos</a></Link>
                </li>
                <li>/</li>
                <li>
                    <Link to='/'><a>Vídeos</a></Link>
                </li>
                <li>/</li>
                <li>
                    <Link to='/'><a>Meu carrinho</a></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;