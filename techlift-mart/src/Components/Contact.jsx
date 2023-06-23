import './contact.css'
import { IoIosCall } from 'react-icons/io'
import call from '../assets/call.svg'
import email from '../assets/email.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="mobile-contact"></div>
            <div className="desktop-contact">
                <div className="left__panel">
                    <h3>Contact Info</h3>
                    <p>Please drop your message for any enquire <br/>
                        and we will contact you shortly
                    </p>
                    <aside>
                        <span className='flex items-center'><img src={call} className='w-5 h-5 m-1' /> +234567745583789</span>
                        <span className='flex items-center'><img src={email} className='w-5 h-5 m-1' /> info@techliftcommunity.com</span>
                    </aside>
                </div>
                <div className="right__panel">
                    <form>
                        <label>
                            <input type="text" placeholder="Your name" />
                        </label>
                        <label>
                            <input type="text" placeholder="Email" />
                        </label>
                        <label>
                            <textarea
                                rows="7"
                                name='message'
                                // value=''
                                // onChange={handleChange}
                                placeholder="Your Message"
                            />
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <footer>
                Copyright@2023 Techlift Mart, ALL Right Reserved | Designed by Techlift Community
            </footer>
        </div>
    )
}
export default Contact