import {Link} from 'react-router-dom'

import { IoMenu } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburguerIcon = <IoMenu className='menu-hamburguer' id='hamburguer'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <IoClose className='menu-hamburguer'
        onClick={() => setOpen(!open)}
    />

    return (
        <nav className='MobileNavigation'>
            {open ? closeIcon : hamburguerIcon}
            {open && <ul>
                <li>
                    <Link to='/'><a>Como fazer</a></Link>
                </li>
                <li>
                    <Link to='/'><a>Ofertas</a></Link>
                </li>
                <li>
                    <Link to='/'><a>Depoimentos</a></Link>
                </li>
                <li>
                    <Link to='/'><a>Vídeos</a></Link>
                </li>
                <li>
                    <Link to='/'><a>Meu carrinho</a></Link>
                </li>
            </ul>}
        </nav>
    );
}

export default MobileNavigation;