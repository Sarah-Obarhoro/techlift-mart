import { Link, useNavigate } from "react-router-dom"
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'

const Signup = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/products')
    }
    return (
        <div className="w-full flex justify-center items-center font-inter bg-[#F7F7F7] py-[60px] min-h-full">
            <div className="w-6/12 bg-techliftWhite pb-[100px]">
                <div className="bg-techliftBlue h-[133px] p-12 flex justify-between">
                    <span className="">
                        <h4 className="font-inter text-techliftWhite font-bold">Create Account</h4>
                    </span>
                    {/* <span>
                        <button><img src={close} alt='close'/></button>
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
                <form className="flex flex-wrap justify-evenly items-stretch">
                    <div className="flex flex-col justify-evenly w-[45%]">
                        <label htmlFor='fName' className="grid w-full gap-[12px] relative mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">First Name</span>
                            <input 
                                type='text' 
                                placeholder='Enter your first name'
                                className="min-w-[100%] h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                        <label htmlFor='email' className="grid w-full gap-[12px] relative  mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">Email</span>
                            <input 
                                type='email' 
                                placeholder='Enter your email'
                                className="min-w-[100%] h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                        <label htmlFor='Password' className="grid w-full gap-[12px] relative  mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">Password</span>
                            <input 
                                type='password' 
                                placeholder='Enter a valid password'
                                className="min-w-full h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col justify-evenly w-[45%]">
                        <label htmlFor='lName' className="grid w-full gap-[12px] relative mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">First Name</span>
                            <input 
                                type='text' 
                                placeholder='Enter your last name'
                                className="min-w-[100%] h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                        <label htmlFor='telNo' className="grid w-full gap-[12px] relative  mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">Email</span>
                            <input 
                                type="tel"
                                size="11"
                                minLength='11'
                                maxLength='11'
                                pattern="[0-9{3}-[0-9]{4}-[0-9]{4}]" 
                                placeholder='Enter your phone number'
                                className="min-w-[100%] h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                        <label htmlFor='Password' className="grid w-full gap-[12px] relative  mb-4">
                            <span className="font-inter text-base font-normal text-techliftBlack">Confirm Password</span>
                            <input 
                                type='password' 
                                placeholder='Confirm password'
                                className="min-w-full h-[50px] px-6 rounded-xl outline-none border border-[#3E3E3E] placeholder:text-sm"
                            />
                        </label>
                    </div>
                    <div className="w-[98%] mt-10 flex flex-col justify-center items-center gap-6 px-8">
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
                    <div className="w-full mt-12 text-center px-8">
                        <button 
                            className="w-full rounded-xl h-[70px] outline-none border-none bg-techliftBlue text-base text-techliftWhite font-bold"
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                        <span 
                            className="text-[#66696B] text-xs text-justify font-bold max-w-[464px]"
                        >
                            By clicking “Create account”, you agree with Techlift Mart
                            Privacy and Condition of Use.
                        </span>
                        <p className="mt-[40px] text-[#66696B] text-xs text-center font-medium">
                            Already have an account? <Link className="font-bold" to="/login">Sign in</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup