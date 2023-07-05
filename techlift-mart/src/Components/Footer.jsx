import './styles/footer.css'

import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="mobile__footer"></div>
            <div className="desktop__footer">
                <section className='h-[261px] text-xl text-techliftWhite bg-techliftBlack flex justify-around items-center px-[20px] gap-10'>
                    <div className='flex justfy-between items-center gap-4'>
                        <label htmlFor="subscribe">
                            <p className='text-sm'>Subscribe to our newsletter to get up on our latest deal</p>
                            <input 
                                type="text" 
                                placeholder="johndoe@mail.com" 
                                className="w-[475px] h-[59px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                        <>
                            <button className="w-[176px] h-[59px] text-techliftWhite bg-techliftBlue rounded-xl text-center mt-[20px]">
                                Subscribe
                            </button>
                        </>
                    </div>
                    <div className="">
                        <p className="text-xl mb-2">GET THE TECHLIFT APP ON</p>
                        <div className="flex text-sm">
                            <div className="w-[215px] h-[70px] rounded-2xl bg-techliftBlack border-2 border-sky-500 text-techliftWhite text-center">
                            <span className="flex justify-center pt-3">
                                <AiFillApple
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "5px",
                                }}
                                />
                                Download on the <br /> App Store
                            </span>
                            </div>

                            <div className="w-[215px] h-[70px] ml-4 rounded-2xl bg-techliftBlack border-2 border-sky-500 text-techliftWhite text-center">
                            <span className="flex justify-center pt-3">
                                <BsGooglePlay
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "5px",
                                }}
                                />
                                Download on the <br /> Google Play Store
                            </span>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='bg-techliftBlue h-[615px] flex justify-evenly items-center gap-5 px-[20px] capitalize text-techliftWhite text-lg'>
                    <div className="column-one">
                        <div>
                            <Link to="" target="_blank">about us</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">contact us</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">our forum</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">careers</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">our blog</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">terms and conditions</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">privacy policy</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">windows store</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">apple store</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">iphone and android</Link>
                        </div>
                    </div>
                    <div className="column-two">
                        <div>
                            <Link to="" target="_blank">help center</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">how to shop on techlift mart</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">delivery options</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">delivering options</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">reporting a product</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">dispute and resolution policy</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">returns and refund policy</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">shipping a product</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">track order</Link>
                        </div>
                    </div>
                    <div className="column-three">
                        <div>
                            <Link to="" target="_blank">mastercard</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">techlift mart wallet</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">visa card</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">verve card</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">RRR</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">transfer</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">cash payment</Link>
                        </div>
                    </div>
                    <div className="column-four">
                        <div>
                            <Link to="" target="_blank">advertise on techlift mart</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">scale product on techlift mart</Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">becoming techlift mart provider</Link>
                        </div>
                    </div>
                </footer>
                <hr className='py-2 bg-techliftWhite' />
            </div>
        </div>
    )
}
export default Footer