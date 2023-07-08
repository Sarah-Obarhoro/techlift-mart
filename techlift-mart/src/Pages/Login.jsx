import Signin from "../Components/Signin"
import { Link, useNavigate } from "react-router-dom"
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'


const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/products')
    }

    return (
        <div className="flex justify-center items-center bg-[#f7f7f7] min-h-full pt-[20px] pb-[60px]">
                <div className="w-1/2 bg-techliftWhite z-50">
      <div className="bg-techliftBlue h-[83px] p-6 flex justify-between">
        <span>
            <h4 className="font-inter text-techliftWhite">Login</h4>
        </span>
        {/* <span>
            <button onClick={onClose}><img src={close} alt='close'/></button>
        </span> */}
      </div>
      <div className="text-center mt-6 mr-[50px] pl-10">
        <h1 className="text-techliftBlue font-redRose text-2xl">Techlift</h1>

        <h1 className="text-techliftBlue font-redRose text-2xl relative left-5">
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
        <div className="flex items-center pt-6">
            <div className="flex-grow h-px bg-techliftGray"></div> 
            <span className="flex-shrink text-base text-techliftBlue px-4 font-light">or</span>
            <div className="flex-grow h-px bg-techliftGray"></div>
        </div>
        <div className="w-full mt-10 flex flex-col justify-center items-center gap-2">
            <button 
                className="w-full rounded-xl h-[50px] outline-none border border-[#3E3E3E] text-sm text-techliftBlack font-bold"
            >
                <span className="flex justify-center items-center gap-2">
                    <img src={facebook} alt="facebook's logo" />
                    <>Sign with Facebook</>
                </span>
            </button>
            <button 
                className="w-full rounded-xl h-[50px] outline-none border border-[#3E3E3E] text-sm text-techliftBlack font-bold"
            >
                <span className="flex justify-center items-center gap-2">
                    <img src={google} alt="google's logo" />
                    <>Sign with Google</>
                </span>
            </button>
        </div>
        <div className="w-full mt-12 text-center">
            <button 
                className="w-full rounded-xl h-[70px] outline-none border-none bg-techliftBlue text-base text-techliftWhite font-bold"
                onClick={handleSubmit}
            >
                Sign in
            </button>
            <span 
                className="text-[#66696B] text-xs text-justify font-medium"
            >Don't have an account? <Link to="/signup">Sign up</Link></span>
        </div>
      </form>
    </div>
        </div>
    )
}
export default Login