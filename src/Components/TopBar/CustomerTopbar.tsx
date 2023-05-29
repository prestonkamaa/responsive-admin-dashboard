import { ChevronLeftIcon, ClipboardDocumentListIcon, PencilIcon} from "@heroicons/react/24/outline"
import Test from "../../Pages/Test" 

export default function TopBar(){
    return(
        <>  


            <div className="md:flex md:space-y-0 space-y-3 items-center border-b-[1px] py-3 px-5">
                <div className=" flex items-center mr-auto hover:text-green-800 text-gray-500">
                    <ChevronLeftIcon className="w-4 h-4 "/> <p className=" pl-5 text-sm">Back To Customer</p>
                </div>

                <div className=" flex md:flex-nowrap flex-wrap items-center md:mr-5 ">
                    <p className="text-sm text-gray-700 md:pb-0 pb-2 pr-2 ">DATE</p>  
                    <Test />  
                </div>
                <div className=" flex items-center mr-5 text-gray-700  hover:text-green-700">
                    <ClipboardDocumentListIcon className="w-4 h-4"/> 
                    <p className="text-sm pl-2 ">VIEW STATEMENT</p> 
                </div>
                <div className=" flex items-center text-gray-700  hover:text-green-700 ">
                    <PencilIcon className="w-4 h-4"/> 
                    <p className="text-sm pl-2 ">EDIT CUSTOMER DETAILS </p>
                </div>
            </div>
        </>
)
    
}