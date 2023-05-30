// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import OutlineButton from "../Components/Button/OutlineButton";

 
export default function Login() {
  return (
    <div className=" flex lg:flex-row flex-col-reverse h-screen ">
      
      <div className="lg:w-1/2 lg:px-24 lg:py-16 m-5 overflow-y-auto scrollbar-none ">

        <div>
          <p className="text-2xl pb-1 items-center text-gray-500">Get Started Now</p>
          <p className="text-sm  items-center text-gray-500">Enter your credentials to access your  account.</p>
        </div>

        <div className=" flex gap-x-3 py-5 ">
          <OutlineButton name="Login with Google" icon="" />
          <OutlineButton name="Login with Apple" icon="" />
        </div>
  

        <div className="flex items-center pb-5 ">
        <div className="flex-grow bg bg-gray-300 h-[1px] "></div>
        <div className="flex-grow-0 mx-5 text-sm text-gray-500">or</div>
        <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
    </div>
  
      <div className=" space-y-5"> 
        <div> 
          <p className=" pb-2 text-sm font-medium text-gray-900">Name</p>
          <input type="text" id="name" className="block w-full p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="John Doe" required />
        </div>
        <div>
          <p className=" pb-2 text-sm font-medium text-gray-900">Email Address</p>
          <input type="text" id="email" className="block w-full p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="john@johndoe.com" required /> 
        </div>
        <div>
          <div className=" flex">
            <p className=" pb-2 text-sm font-medium text-gray-900 mr-auto">Password </p>
            <p className=" pb-2 text-sm font-medium text-green-500 hover:text-green-600  cursor-pointer ">Forgot Password?</p>
          </div>
          
          <input type="password" id="search" className="block w-full p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="*************" required /> 
        </div>
        <div className=" flex text-sm  items-center text-gray-500 hover:text-green-500">
        <input type="checkbox" className=" rounded-md mr-2" /> I agree to Terms & Privacy 
        </div>  

        <div>
          <Link to="/dashboard">
            <button  className=" w-full grow cursor-pointer bg-green-500 py-2 align-middle rounded-2xl items-center text-sm text-white">
              Login
            </button>
          </Link>
        </div>

      </div>





        







      </div>

      <div className="lg:w-1/2 lg:m-3 lg:p-16 p-5 bg-green-500 rounded-xl m-5 text-white">

        <div>
          <p className="text-2xl font-medium items-center " >
            The simplest way to manage your construction workforce.
          </p>

          <p className="text-sm  items-center pt-1" >
            Enter your redentials to access your account
          </p>
        </div>

        <div className=" flex justify-center pt-2">
          <img 
            src={process.env.PUBLIC_URL + "/assets/img/admin.png"}
            width="420px"
            height="420px"
            alt="" 
          />
        </div>

          

        <div className="flex md:flex-nowrap grid-col-2 gap-2 pt-2 justify-center ">

          <img 
              src={process.env.PUBLIC_URL + "/assets/img/partner.png"}
              width="120"
              height="53"
              alt=""
          />
          <img 
              src={process.env.PUBLIC_URL + "/assets/img/partner.png"}
              width="120"
              height="53"
              alt=""
          />
          <img 
              src={process.env.PUBLIC_URL + "/assets/img/partner.png"}
              width="120"
              height="53"
              alt=""
          /> 
          <img 
              src={process.env.PUBLIC_URL + "/assets/img/partner.png"}
              width="120"
              height="53"
              alt=""
          /> 

        </div>
 




 
      </div>
    </div>
  )
}
