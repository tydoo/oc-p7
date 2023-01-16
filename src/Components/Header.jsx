import { Link, useMatch } from 'react-router-dom'
import logo from '../assets/logo_header.svg'

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div>
                <Link to='.'>
                    <img src={ logo } alt="Logo Kasa" className="w-36 sm:w-full" />
                </Link>
            </div>
            <div className='sm:mr-8'>
                <Link to='.' className={(useMatch("/") && 'underline') + ' text-sm redMainColor font-normal sm:text-2xl sm:font-medium mr-5 sm:mr-14'}>Accueil</Link>
                <Link to='about' className={(useMatch("/about") && 'underline') + ' text-sm redMainColor font-normal sm:text-2xl sm:font-medium'}>A Propos</Link>
            </div>
        </header>
    )
}

export default Header