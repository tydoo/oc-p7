import { useState } from "react"
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'

const Carrousel = ({images}) => {
    const [imageSelected, updateImageSelected] = useState(0)

    const nextIS = (e) => {
        switch (imageSelected) {
            case images.length - 1:
                updateImageSelected(0)
                break;
            default:
                updateImageSelected(imageSelected + 1)
                break;
        }
    }

    const previusIS = (e) => {
        switch (imageSelected) {
            case 0:
                updateImageSelected(images.length - 1)
                break;
            default:
                updateImageSelected(imageSelected - 1)
                break;
        }
    }
    
    return (
        <div style={
            {
                backgroundImage:`url(${images[imageSelected]})`
            }
        } className="h-[255px] md:h-[415px] rounded-3xl mt-5 w-full bg-center bg-cover relative flex items-center">
            {images.length > 1 &&
            <div className="flex items-center justify-between w-full">
                <img onClick={previusIS} className="cursor-pointer md:ml-6 ml-2 md:w-auto w-3" src={arrow_left} alt="arrow_left" />
                <img onClick={nextIS} className="cursor-pointer md:mr-6 mr-2 md:w-auto w-3" src={arrow_right} alt="arrow_right" />
            </div>
            }
            <p className="text-white text-lg hidden md:inline absolute bottom-6 left-1/2 right-1/2">{(imageSelected+1)}/{images.length}</p>
        </div>
    )
}

export default Carrousel