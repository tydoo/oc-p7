import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="flex flex-col justify-center redMainColor">
            <p className="text-center text-8xl md:text-[288px] textFull404 font-bold md:mt-36 mt-48">404</p>
            <p className="text-center font-medium md:text-4xl text-lg px-14 md:px-0 mt-4 md:mt-16">Oups! La page que vous demandez n'existe pas.</p>
            <div className="text-center mt-48">
                <Link className="text-center font-medium underline md:text-lg text-sm" to='.'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}

export default Error404