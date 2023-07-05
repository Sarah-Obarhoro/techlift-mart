import { useState } from 'react'
import './styles/faq.css'
import { TiArrowSortedDown } from 'react-icons/ti'
import { TiArrowSortedUp } from 'react-icons/ti'

const Faq = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='font-inter'>
            <div className="mb-faq">
                <div className="faq-title" onClick={() => setIsActive(!isActive)}>
                                <div>{question}</div>
                                <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="faq-content">{answer}</div>}
            </div>
            <div className="dt-faq">
                <div className="faq-title" onClick={() => setIsActive(!isActive)}>
                                <div>{question}</div>
                                <div>{isActive ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</div>
                </div>
                {isActive && <div className="faq-content" dangerouslySetInnerHTML={{__html: answer}} />}
            </div>
        </div>
    )
}
export default Faq