import { Link } from "react-router-dom"
import AvailablePages from "../Components/AvailablePages"

export default function Estimates() {
  return ( 
    <div className="flex flex-col items-center justify-center h-screen"> 

    <p className=" font-bold text-8xl text-green-500 "> Estimates </p>  
    <p className=" font-bold text-2xl text-gray-500 "> Coming Soon </p>  

    <Link to="/dashboard">   
    <p className="  pt-5 text-sm text-gray-500 hover:text-green-400 ">Oops! Page can't be found - return to dashboard</p> 
    </Link> 
    <AvailablePages />  

    </div>    
  )
}
