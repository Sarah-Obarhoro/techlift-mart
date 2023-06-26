import { Link } from "react-router-dom"
import { BiLogoFacebookCircle } from 'react-icons/bi' 
import { FcGoogle } from 'react-icons/fc'

import close from '../assets/close.svg'

const Signin = ({ onClose }) => {

  return (
    <div className="fixed top-0 right-0 h-full w-full flex font-inter">
    <div className="flex-1 bg-techliftBlack opacity-80"></div>
    <div className="w-2/5 bg-techliftWhite z-10">
      <div className="bg-techliftBlue h-[83px] p-6 flex justify-between">
        <span>
            <h4 className="font-inter text-techliftWhite">Login</h4>
        </span>
        <span>
            <button onClick={onClose}><img src={close} alt='close'/></button>
        </span>
      </div>
      <div className="pl-10 text-center mt-6 mr-[50px]">
        <h1 className="text-techliftBlue font-arizona text-2xl">Techlift</h1>
        <h1 className="text-techliftBlue font-arizona text-2xl relative left-5">
          Mart
        </h1>
      </div>
      <div className='text-center mt-[30px]'>
        <p className='font-medium text-[16px] text-techliftBlack leading-[25px]'>
            Enter your email or phone number to log in or create Techlift Mart Account</p>
        <hr className='bg-techliftBlue-200 my-4 border-1 dark:bg-techLiftBlue-700' />
      </div>
      <form className="flex flex-col px-[24px] w-full">
        <div className="flex flex-col gap-[21px] w-full">
            <label htmlFor='email' className="grid w-full gap-[12px] relative">
                <span className="font-inter text-base font-normal text-techliftBlack">Email</span>
                <input 
                    type='email' 
                    placeholder='Enter your email'
                    className="min-w-[100%] h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                />
            </label>
            <label htmlFor='Password' className="grid w-full gap-[12px] relative">
                <span className="font-inter text-base font-normal text-techliftBlack">Password</span>
                <input 
                    type='password' 
                    placeholder='Enter a valid password'
                    className="min-w-full h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                />
            </label>
        </div>
        <div className="w-full flex justify-between items-center mt-[11px] text-sm font-inter">
            <label htmlFor='remember' className="flex justify-center items-center gap-[6px]">
                <input type='checkbox' />
                <span className="text-[#66696B] font-medium">Remember me</span>
            </label>
            <Link to="#">Forgot password?</Link>
        </div>
        <div class="flex items-center pt-6">
            <div class="flex-grow h-px bg-techliftGray"></div> 
            <span class="flex-shrink text-base text-techliftBlue px-4 font-light">or</span>
            <div class="flex-grow h-px bg-techliftGray"></div>
        </div>
        <div className="w-full mt-10 flex flex-col justify-center items-center gap-2">
            <button 
                className="w-full rounded-xl h-[50px] outline-none border border-[#3E3E3E] text-sm text-techliftBlack font-bold"
            >
                Sign in with Facebook
            </button>
            <button 
                className="w-full rounded-xl h-[50px] outline-none border border-[#3E3E3E] text-sm text-techliftBlack font-bold"
            >
                Sign with Google
            </button>
        </div>
        <div className="w-full mt-12 text-center">
            <button 
                className="w-full rounded-xl h-[70px] outline-none border-none bg-techliftBlue text-base text-techliftWhite font-bold"
            >
                Sign in
            </button>
            <span 
                className="text-[#66696B] text-xs text-justify font-medium"
            >Don't have an account? <Link to="signup">Sign up</Link></span>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Signin


