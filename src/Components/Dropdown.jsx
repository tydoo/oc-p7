import { useState } from "react"
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'

const Dropdown = ({title,content}) => {
    const [isOpen, updateOpen] = useState(false)

    const contentFinal = () => {
        return (
            content.constructor === Array ? content.map((ce,key) =>
                <div key={`${key}-arr`}>{ce}</div>
            ) : content
        )
    }

    return (
        <div className="sm:mb-8 mb-5">
            <div onClick={(e) => updateOpen(!isOpen)} className={(isOpen ? 'rounded-t-md':'rounded-md') + ' cursor-pointer redMainBackground text-white sm:pl-4 sm:pr-8 sm:py-2 pl-3 py-1 pr-2 flex justify-between items-center'}>
                <div className="flex items-center sm:text-2xl s:font-medium">{title}</div>
                <div className="flex items-center">{isOpen ? <img src={arrow_up} alt="arrow_up" className="sm:w-auto w-4" /> : <img src={arrow_down} alt="arrow_down" className="sm:w-auto w-4" /> }</div>
            </div>
            {isOpen && 
            <div style={{backgroundColor: '#F7F7F7'}} className="redMainColor rounded-b-md sm:pt-7 pt-5 sm:pr-7 pr-2 sm:pb-5 pb-4 sm:pl-5 pl-3 sm:text-2xl text-sm">{contentFinal()}</div>
            }
        </div>
    )
}

export default Dropdown