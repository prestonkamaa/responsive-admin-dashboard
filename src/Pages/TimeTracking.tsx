// import { Link } from "react-router-dom"
import TimeTrackingCard from "../Components/Cards/TimeTrackingCard"

export default function TimeTracking() {
  return ( 

    <>
      Logged Time Feb 17 - Feb 21

      Show Company Pay Period Report  

      <TimeTrackingCard />
    

      <div className=" border p-3 rounded-lg">
        <p>Regular</p> 
        <p>330.2 Hours</p> 
        <p>5.5% up from last week</p>
      </div>


    
    
    </>

    // <div className="flex flex-col items-center justify-center h-screen"> 

    // <p className=" font-bold text-8xl text-green-500 "> TimeTracking </p>  
    // <p className=" font-bold text-2xl text-gray-500 "> Coming Soon </p>  

    // <Link to="/dashboard">   
    // <p className="  pt-5 text-sm text-gray-500 hover:text-green-400 ">Oops! Page can't be found - return to dashboard</p> 
    // </Link>   
    // <p className="  pt-5 text-sm text-gray-500 hover:text-green-400 "> Available pages Dashboard | Customers | Profile.</p>

    // </div>
  )
}
