import { Link } from "react-router-dom"

const Card = ({logement}) => {
    return (
        <Link to={`housing/detail/${logement.id}`}>
            <div style={{
                height: '340px',
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`
            }} className="w-full bg-cover text-white flex items-end p-5 font-medium text-sm rounded-xl">{logement.title}
            </div>
        </Link>
    )
}

export default Card