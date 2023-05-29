import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"

type projectDetails = {
    clientProject: string
    projStatus: string
    balance: string
    value: string
    documents: string
    startDate: string
    endDate: string
}

export default function ServiceStatusCard(props: projectDetails) {
  return (
    <>
 


        <div className=" grow p-2 border rounded-md border-gray-300 relative"> 

            <span className={` absolute w-1 left-[-2px] rounded h-64
             ${ (props.projStatus === "ACCEPTED") ? "bg-green-500" : (props.projStatus === "PENDING") ? "bg-yellow-500" : (props.projStatus === "OVERDUE") ? "bg-red-500" : "bg-gray-500" }
             `}></span> 

            <div className=" flex">
                <div className=" mr-auto">
                    <p className=" text-sm font-semibold w-40">{props.clientProject}</p>
                </div>     
                <div>
                    <p className=" bg-gray-100 flex items-center justify-center text-gray-500 text-sm rounded-sm w-5 h-5">
                        <EllipsisVerticalIcon className=" w-3 h-3" />
                    </p>
                </div>     
            </div>

            

            <p className={` my-3  flex items-center justify-center text-sm rounded-sm w-24 h-5
             ${ (props.projStatus === "ACCEPTED") ? "bg-green-100" : (props.projStatus === "PENDING") ? "bg-yellow-100" : (props.projStatus === "OVERDUE") ? "bg-red-100" : "bg-gray-100" } 
             ${ (props.projStatus === "ACCEPTED") ? "text-green-500" : (props.projStatus === "PENDING") ? "text-yellow-500" : (props.projStatus === "OVERDUE") ? "text-red-500" : "text-gray-500" } 
             `}
             >{props.projStatus}</p>
            
            <div className=" flex gap-10">
                <div>
                    <p className=" text-gray-400">Balance Due</p>
                    <p className=" text-sm font-semibold">Ksh. {props.balance}</p>  
                </div>

                <div>
                    <p className=" text-gray-400">Value</p>
                    <p className=" text-sm font-semibold">Ksh. {props.value}</p>  
                </div> 
            </div>

            <div className=" mt-7 mb-3">
                <p className=" text-gray-400">Documents</p>
                <p className=" text-sm font-semibold">{props.documents}</p>  
            </div> 

            <div className=" flex gap-10">
                <div>
                    <p className=" text-gray-400">Start Date</p>
                    <p className=" text-sm font-semibold">{props.startDate}</p>  
                </div>  
                <div>
                    <p className=" text-gray-400">Due Date</p>
                    <p className=" text-sm font-semibold">{props.endDate}</p>  
                </div> 
            </div>
 

        </div>
    </>
  )
}
