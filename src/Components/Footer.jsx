import logo from '../assets/logo_footer.svg'

const Footer = () => {
    return (
        <footer className='bg-black pt-16 flex flex-col items-center mt-10'>
            <div><img src={ logo } alt="Logo Kasa" /></div>
            <p className='text-white pt-8 pb-7 text-xs font-normal sm:text-2xl sm:font-medium'>&copy; 2020 Kasa. All right reserved</p>
        </footer>
    )
}

export default Footer