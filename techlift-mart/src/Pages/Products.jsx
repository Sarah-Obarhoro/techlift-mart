import './styles/products.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { BsCart3, BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import iphone from '../assets/iphone.svg'
import camera from '../assets/camera.svg'
import watch from '../assets/watch.svg'
import laptop from '../assets/laptop.svg'
import go from '../assets/go.svg'
import black from '../assets/black.svg'
import headphone from '../assets/headphone.svg'
import star from '../assets/star.svg'
import asus from '../assets/asus.svg'
import oraimo from '../assets/oraimo.svg'
import printer from '../assets/printer.svg'
import collections1 from '../assets/collections1.svg'
import collections2 from '../assets/collections2.svg'
import collections3 from '../assets/collections3.svg'
import redmi from '../assets/redmi.svg'
import galaxy from '../assets/galaxy.svg'
import mouse from '../assets/mouse.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const Products = () => {
    return (
        <div className="products">
            <div className="mobile__products"></div>
            <div className="desktop__products">
                <header className='text-techliftBlue'>
                    <div className="">
                        <p className='font-inter text-sm'>Shop Smarter, Explore Better, Get all gadgets in one store</p>
                    </div>
                    <nav className="flex items-center justify-between gap-10">
                        <span>Call to order : 0800 200 000 </span>
                        <span>infor@techliftmart.com</span>
                        <span className="flex">
                            <FaFacebook className="w-6 h-6 text-[#1877F2]" />
                            <AiFillTwitterCircle className="w-6 h-6 text-[#00A3FF] ml-1" />
                            <TiSocialLinkedinCircular className="w-6 h-6 text-[#1877F2]" />
                        </span>
                    </nav>
                </header>
                <section className='h-[105px] bg-[#D4D4D4] flex justify-evenly items-center px-[20px]'>
                    <span>
                        <h1 className="text-techliftBlue font-redRose text-2xl">Techlift</h1>
                        <h1 className="text-techliftBlue font-redRose text-2xl relative left-5">Mart</h1>
                    </span>
                    <span>
                        <input 
                            type='text' 
                            placeholder='Search by categories, products & brands'
                            className="w-[670px] h-[50px] px-6 rounded-2xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                        />
                    </span>
                    <span className='desktop__dropdown'>
                        <div className='desktop__dropbtn'>EN <TiArrowSortedDown /></div>
                        <div className='desktop__dropdown__content'>
                            <p>EN</p>
                            <p>ES</p>
                            <p>IT</p>
                        </div>
                    </span>
                    <span className='desktop__dropdown'>
                        <div className='desktop__dropbtn'>Help <TiArrowSortedDown /></div>
                        <div className='desktop__dropdown__content'>
                             <NavLink to=''>Order Cancellation</NavLink>
                             <NavLink to=''>Return and Refunds</NavLink>
                             <NavLink to=''>Payment</NavLink>
                             <NavLink to=''>Custom Block</NavLink>
                             <NavLink to=''>Late Delivery</NavLink>
                        </div>
                    </span>
                    <span className='desktop__dropdown'>
                        <div className='desktop__dropbtn'>My Account <TiArrowSortedDown /></div>
                        <div className='desktop__dropdown__content'>
                            <p>Hello James</p>
                            <NavLink>Track my Order</NavLink>
                            <NavLink>My Order</NavLink>
                            <NavLink>My Wishlist</NavLink>
                            <NavLink>My Wallet</NavLink>
                            <NavLink className='bg-techliftBlue'>Logout</NavLink>
                        </div>
                    </span>
                    <span className='desktop__cart'>
                        My Cart <BsCart3 className='text-techliftBlack'/>
                    </span>
                </section>
                <section className='h-[105px] text-xl text-techliftWhite bg-techliftBlue flex justify-evenly items-center px-[20px]'>
                    <span className='desktop__dropdown'>
                            <div className='desktop__categories'><GiHamburgerMenu className='mr-3' /> All Categories <TiArrowSortedDown /></div>
                            <div className='desktop__dropdown__content'>
                                <div className='flex justify-evenly items-center px-[16px] py-[12px]'>
                                    <span className='text-base font-regular'>
                                        <p className='font-semibold text-xl'>Laptops</p>
                                        <NavLink>Mini Laptops and Netbook</NavLink>
                                        <NavLink>Ultrabooks</NavLink>
                                        <NavLink>Hybrid PCs</NavLink>
                                        <NavLink>Macbooks</NavLink>
                                    </span>
                                    <span className='text-base font-regular'>
                                        <p className='font-semibold text-xl'>Computer and Accessories</p>
                                        <NavLink>Computer Peripherals</NavLink>
                                        <NavLink>Bags, Cases, Covers and Sleeves</NavLink>
                                        <NavLink>Laptops and Desktops Accessories</NavLink>
                                        <NavLink>Storage Devices</NavLink>
                                    </span>
                                    <span className='text-base font-regular'>
                                        <p className='font-semibold text-xl'>Desktops and Monitors</p>
                                        <NavLink>UPs</NavLink>
                                        <NavLink>CPUs</NavLink>
                                        <NavLink>Servicers</NavLink>
                                        <NavLink>Desktop Bundles</NavLink>
                                    </span>
                                </div>
                            </div>
                    </span>
                     <span className='cursor-pointer'>Phone Accessories</span>
                     <span className='cursor-pointer'>Computers and Accessories</span>
                     <span className='cursor-pointer'>Smart Watches</span>
                     <span className='cursor-pointer'>Cameras and Accessories</span>
                     <span className='cursor-pointer'>Bluetooth Speakers</span>
                </section>
                <section className='px-[20px] mb-[40px]'>
                    <Slider />
                </section>
                <section className='flex justify-evenly items-center px-[20px]'>
                    <div className='w-[310px] h-[207px] bg-[#D7D7D7] rounded-xl flex justify-evenly items-center'>
                        <span>
                            <img src={iphone} alt='iphone' className='w-[126px] h-[139px]' />
                        </span>
                        <span className='max-w-[130px]'>
                            <h5 className='font-bold text-techliftBlue'>NEW ARRIVAL</h5>
                            <p>CATCH BIG DEALS ON THE <b>iPhone</b></p>
                            <button className='bg-none border-none outline-none text-techliftBlue mt-4 flex justify-center items-center  font-bold'>
                                Buy Now <img src={go} alt='buy now' className='h-[30px] w-[30px]'/>
                            </button>
                        </span>
                    </div>
                    <div className='w-[310px] h-[207px] bg-[#D7D7D7] rounded-xl flex justify-evenly items-center'>
                        <span>
                            <img src={camera} alt='camera' className='w-[135px] h-[152px]' />
                        </span>
                        <span className='max-w-[130px]'>
                            <h5 className='font-bold text-techliftBlue'>NEW ARRIVAL</h5>
                            <p>CATCH BIG DEALS ON THE <b>Camera</b></p>
                            <button className='bg-none border-none outline-none text-lg text-techliftBlue mt-4 flex justify-center items-center  font-bold'>
                                Buy Now <img src={go} alt='buy now' className='h-[30px] w-[30px]'/>
                            </button>
                        </span>
                    </div>
                    <div className='w-[310px] h-[207px] bg-[#D7D7D7] rounded-xl flex justify-evenly items-center'>
                        <span>
                            <img src={watch} alt='watch' className='w-[133px] h-[145px]' />
                        </span>
                        <span className='max-w-[130px]'>
                            <h5 className='font-bold text-techliftBlue'>NEW ARRIVAL</h5>
                            <p>CATCH BIG ON THE <b>Watch</b></p>
                            <button className='bg-none border-none outline-none text-lg text-techliftBlue mt-4 flex justify-center items-center  font-bold'>
                                Buy Now <img src={go} alt='buy now' className='h-[30px] w-[30px]'/>
                            </button>
                        </span>
                    </div>
                    <div className='w-[310px] h-[207px] bg-[#D7D7D7] rounded-xl flex justify-evenly items-center'>
                        <span>
                            <img src={laptop} alt='laptop' className='w-[166px] h-[132px]' />
                        </span>
                        <span className='max-w-[130px]'>
                            <h5 className='font-bold text-techliftBlue'>NEW ARRIVAL</h5>
                            <p>CATCH BIG ON THE <b>Laptop</b></p>
                            <button className='bg-none border-none outline-none text-lg text-techliftBlue mt-4 flex justify-center items-center  font-bold'>
                                Buy Now <img src={go} alt='buy now' className='h-[30px] w-[30px]'/>
                            </button>
                        </span>
                    </div>
                </section>
                <section className='mt-[100px] px-[20px] flex justify-evenly items-center'>
                    <div>
                        <img src={black} alt='black friday' className='h-[610px] w-[434px]' />
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <span>
                            <h2 className='text-start text-2xl text-techliftBlack font-semibold'>Trending Products</h2>
                            <hr className='my-4 w-[1068px]' />
                        </span>
                        <span className='flex justify-between items-center'>
                            <div className='w-[335px] h-[530px] shadow-xl p-10'>
                                <b className='text-end'>-50%</b>
                                <img src={headphone} alt='headphone'  className='pb-6' />
                                <em className='font-bold'>Symphonize Blast Wireless Bluetooth Headphone</em>
                                <aside className='flex justify-between items-start  pt-6'>
                                    <div className='flex flex-col'>
                                        <b className='whitespace-nowrap'>₦2, 000</b>
                                        <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <b>10 Reviews</b>
                                    </div>
                                    <div>
                                        <strike>₦2, 000</strike>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button className='w-[102px] h-[42px] mb-2 rounded-xl bg-techliftBlue text-techliftWhite'>Buy Now</button>
                                        <button className='w-[102px] h-[42px] rounded-xl  border border-techliftGray bg-techliftWhite text-[#333030]'>Add to Cart</button>
                                    </div>
                                </aside>
                            </div>
                            <div className='w-[335px] h-[530px] shadow-xl p-10'>
                                <b className='text-end'>-50%</b>
                                <img src={camera} alt='nikon camera'  className='pb-6 w-[228px] h-[222px]' />
                                <em className='font-bold'>Nikon D800 - Medium Format Resolution in DSLR</em>
                                <aside className='flex justify-between items-start  pt-6'>
                                    <div className='flex flex-col'>
                                        <b className='whitespace-nowrap'>₦2, 000</b>
                                        <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <b>10 Reviews</b>
                                    </div>
                                    <div>
                                        <strike>₦2, 000</strike>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button className='w-[102px] h-[42px] mb-2 rounded-xl bg-techliftBlue text-techliftWhite'>Buy Now</button>
                                        <button className='w-[102px] h-[42px] rounded-xl  border border-techliftGray bg-techliftWhite text-[#333030]'>Add to Cart</button>
                                    </div>
                                </aside>
                            </div>
                            <div className='w-[335px] h-[530px] shadow-xl p-10'>
                                <b className='text-end'>-50%</b>
                                <img src={watch} alt='R17 smart bracelet'  className='pb-6 w-[238px] h-[279px]' />
                                <em className='font-bold'>R17 Smart bracelet 2.5D color heart rate blood pressure</em>
                                <aside className='flex justify-between items-start  pt-6'>
                                    <div className='flex flex-col'>
                                        <b className='whitespace-nowrap'>₦2, 000</b>
                                        <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <b>10 Reviews</b>
                                    </div>
                                    <div>
                                        <strike>₦2, 000</strike>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button className='w-[102px] h-[42px] mb-2 rounded-xl bg-techliftBlue text-techliftWhite'>Buy Now</button>
                                        <button className='w-[102px] h-[42px] rounded-xl  border border-techliftGray bg-techliftWhite text-[#333030]'>Add to Cart</button>
                                    </div>
                                </aside>
                            </div>
                        </span>
                    </div>
                </section>
                <section id='best-sellers' className='mt-[100px] px-[20px] flex flex-col justify-evenly items-center'>
                    <span>
                        <h2 className='text-start text-2xl text-techliftBlack font-semibold'>Best Sellers</h2>
                        <hr className='my-4 w-[1513px]' />
                    </span>
                    <span className='w-full'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{
                        enabled: true,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        // navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='flex flex-wrap items-center justify-evenly'>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={asus} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={redmi} alt='XIAOMI Redmi A-2' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>XIAOMI Redmi A2+ 6.52 Inches 2GB RAM 32GB</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={galaxy} alt='samsung galaxy tab' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Samsung Galaxy Tab A7 Lite 8.0" (2021, WiFi Only, No Sim)</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={asus} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={watch} alt='series 8 2023 smart watch' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Series 8 2023 New Smart Watch Bluetooth Call Men</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={mouse} alt='wireless optical vertical mouse' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>2.4G Wireless Optical Vertical Mouse 6 Keys Ergonomic</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-wrap items-center justify-evenly'>
                            <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={asus} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex flex-row justify-between items-center gap-x-10">
                                    <span>
                                        <img src={asus} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span className='flex flex-col items-stretch justify-evenly'>
                                        <span className='text-lg font-medium text-techliftBlack max-w-[270px]'>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <>₦102, 000</>
                                            <><strike>₦106, 000</strike></>
                                        </span>
                                            <div className='flex mt-4 justify-start'>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <span>
                                                    <img src={star} alt='star' />
                                                </span>
                                                <div 
                                                    className='text-xs bg-blend-overlay'
                                                    style={{
                                                        borderRadius: '60px',
                                                        padding: '5px',
                                                        width: '42px',
                                                        height: '28.67px',
                                                        marginTop: '-5px',
                                                        marginLeft: '15px',
                                                        background: `linear-gradient(to right, #E82424 100%, #F18787 22%)`,
                                                        opacity: '0.4'
                                                    }}
                                                >
                                                    <b className='text-white font-bold'>-30%</b>
                                                </div>
                                            </div>
                                        <span className='flex justify-between items-center'>
                                            <button className='w-[102px] h-[42px] mb-2 rounded bg-techliftBlue text-techliftWhite mt-6'>Buy now</button>
                                            <button className='w-[102px] h-[42px] rounded  border border-techliftGray bg-techliftWhite text-[#333030] mt-4'>Add to Cart</button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex justify-evenly items-center">
                                    <span>
                                        <img src={laptop} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span>
                                        <span>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span>
                                            <>102, 000</>
                                            <><strike>106, 000</strike></>
                                        </span>
                                        <span>
                                            <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <div>
                                            <b>-30%</b>
                                        </div>
                                        </span>
                                        <span>
                                            <button></button>
                                            <button></button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex justify-evenly items-center">
                                    <span>
                                        <img src={laptop} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span>
                                        <span>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span>
                                            <>102, 000</>
                                            <><strike>106, 000</strike></>
                                        </span>
                                        <span>
                                            <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <div>
                                            <b>-30%</b>
                                        </div>
                                        </span>
                                        <span>
                                            <button></button>
                                            <button></button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex justify-evenly items-center">
                                    <span>
                                        <img src={laptop} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span>
                                        <span>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span>
                                            <>102, 000</>
                                            <><strike>106, 000</strike></>
                                        </span>
                                        <span>
                                            <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <div>
                                            <b>-30%</b>
                                        </div>
                                        </span>
                                        <span>
                                            <button></button>
                                            <button></button>
                                        </span>
                                    </span>
                                </div>
                                <div className="w-[460px] h-[264px] m-4 shadow-xl rounded p-10  flex justify-evenly items-center">
                                    <span>
                                        <img src={laptop} alt='asus laptop' className='w-[165px] h-[168px]' />
                                    </span>
                                    <span>
                                        <span>Asus Asus W202 Intel Celeron 11.6" 4GB RAM/128GB Win 10</span>
                                        <span>
                                            <>102, 000</>
                                            <><strike>106, 000</strike></>
                                        </span>
                                        <span>
                                            <div className='flex flex-row'>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                                <img src={star} alt='star' />
                                            </span>
                                            <span>
                                            <   img src={star} alt='star' />
                                            </span>
                                        </div>
                                        <div>
                                            <b>-30%</b>
                                        </div>
                                        </span>
                                        <span>
                                            <button></button>
                                            <button></button>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </span>
                </section>
                <section className='mt-[100px] px-[20x] flex flex-col justify-between items-center'>
                    <span>
                        <h2 className='text-start text-2xl text-techliftBlack font-semibold'>Latest Products</h2>
                        <hr className='my-4 w-[1513px] text-techliftWhite' />
                    </span>
                    <span className='bg-[#E5E3E5] h-[571px] w-full'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                            enabled: true,
                            }}
                            pagination={{
                            clickable: true,
                            renderBullet: () => {
                                return ''
                            }
                            }}
                            navigation={true}
                            modules={[Keyboard, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='flex flex-wrap justify-evenly items-center p-10'>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={oraimo} alt='oraimo stereo airpods' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={camera} alt='canon camera' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={printer} alt='hp laser jet printer' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={iphone} alt='iphone 11 6.1 inch' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex flex-wrap justify-evenly items-center p-10'>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={oraimo} alt='oraimo stereo airpods' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={camera} alt='canon camera' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={printer} alt='hp laser jet printer' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                    <div className='w-[284px] h-[503px] bg-techliftWhite rounded p-5'>
                                        <span className='flex justify-end items-center gap-2'>
                                            <button className='w-[51px] h-[24px] rounded bg-[#2C65D4] text-techliftWhite'>
                                                New
                                            </button>
                                            <button className='w-[51px] h-[24px] rounded bg-[#C73A6D] text-techliftWhite'>
                                                Hot
                                            </button>
                                        </span>
                                        <span className='flex justify-center items-center mt-[30px]'>
                                            <img src={iphone} alt='iphone 11 6.1 inch' />
                                        </span>
                                        <figcaption className='mt-[20px]'>
                                            G9S Wireless Bluetooth Headset Hifi Stereo Headset
                                        </figcaption>
                                        <span className='mt-4 flex flex-row gap-4'>
                                            <b className='text-base font-medium'>₦102, 000</b>
                                            <><strike className='text-[#F1ABAB]'>₦106, 000</strike></>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </span>
                </section>
                <section className='mt-[100px] px-[20px] flex flex-col justify-evenly items-center'>
                    <span>
                        <h2 className='text-start text-2xl text-techliftBlack font-semibold'>Best Collection</h2>
                        <hr className='my-4 w-[1513px] text-techliftWhite' />
                    </span>
                    <span className='flex justify-evenly items-center gap-8'>
                        <div>
                            <img src={collections1} alt='headphone' />
                        </div>
                        <div>
                            <img src={collections2} alt='watch' />
                        </div>
                        <div>
                            <img src={collections3} alt='camera' />
                        </div>
                    </span>
                </section>
                <section className='mt-[100px]'>
                    <Footer />
                </section>
            </div>
        </div>
    )
}
export default Products