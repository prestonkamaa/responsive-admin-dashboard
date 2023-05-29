

type Stats = {
  amount: string
  status: string
  totalInvoices: string
}

export default function SmallStats(props: Stats) {
  return (
    
    <div className=" grow relative w-32 h-20 border-2 border-gray-100 rounded-xl mb-2">
        <p className=" text-sm font-medium my-4 px-2"> Ksh. {props.amount}</p>
        <p className={` absolute bottom-0 left-0 flex w-full items-center bg-gray-100 text-[11px] py-2 px-2 font-medium rounded-b-xl
          ${ (props.status === "ACCEPTED") ? "text-green-500" : (props.status === "PENDING") ? "text-orange-400" : (props.status === "OVERDUE") ? "text-red-500" :   "text-gray-400"    }
        `}>
            <p className={`rounded h-2 w-2 mr-1 
            ${ (props.status === "ACCEPTED") ? "bg-green-500" : (props.status === "PENDING") ? "bg-orange-400" : (props.status === "OVERDUE") ? "bg-red-500" :   "bg-gray-400"    }  `}>
              </p> {props.status} ({props.totalInvoices})
        </p>
    </div> 
  )
}
