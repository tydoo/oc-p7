import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from '../data/logements.json'
import Carrousel from '../Components/Carrousel';
import Tag from '../Components/Tag'
import star_0 from '../assets/star_0.svg'
import star_1 from '../assets/star_1.svg'
import Dropdown from '../Components/Dropdown'

const HousingDetail = () => {
    const { housingId } = useParams();
    const navigate = useNavigate();

    let logementSelected = null
    logements.forEach((logement, key) => {
        if(logement.id === housingId && logementSelected === null) {
            logementSelected = logements[key]
        }
    })
    
    useEffect(() => {
        if(logementSelected === null) {
            return navigate("not-found");
        }
    })

    const rating = (rate) => {
        let final = []
        for (let index = 0; index < 5; index++) {
            if(rate > index) {
                final.push(<img key={`star-${index}`} className="md:w-7 w-4 mr-1" src={star_1} alt="star1" />)
            } else {
                final.push(<img key={`star-${index}`} className="md:w-7 w-4 mr-1" src={star_0} alt="star1" />)
            }
        }
        return final
    }
    
    return (logementSelected !== null &&
        <div className="flex flex-col redMainColor">
            <Carrousel images={logementSelected.pictures} />
            <div className="flex justify-between flex-col md:flex-row">
                <div>
                    <p className="md:text-4xl text-lg font-medium md:mt-9 mt-3">{ logementSelected.title }</p>
                    <p className="font-medium smm:text-lg text-sm mt-2">{ logementSelected.location }</p>
                    <div className="flex gap-x-2 mt-4">
                        {logementSelected.tags.map((tag,key) => 
                            <Tag key={`${key}-${tag}`} name={tag} />
                        )}
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between md:flex-col md:justify-center">
                    <div className="flex items-center mt-4">
                        <p className="md:text-lg text-xs font-medium md:max-w-[96px] max-w-[93px] text-right mr-3">{ logementSelected.host.name }</p>
                        <img className="rounded-full md:w-16 w-8" src={logementSelected.host.picture} alt="avatar" />
                    </div>
                    <div className="flex mt-6 justify-end" title={`${logementSelected.rating}/5`}>{rating(logementSelected.rating)}</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:gap-20 gap-0 mt-7">
                <div className="w-full"><Dropdown title="Description" content={logementSelected.description} /></div>
                <div className="w-full"><Dropdown title="Équipements" content={logementSelected.equipments} /></div>
            </div>
        </div>
    )
}

export default HousingDetail