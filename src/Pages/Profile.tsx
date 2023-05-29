import { PencilIcon } from '@heroicons/react/24/outline'

export default function Profile() {
  return (
    <>
    <div className=" flex lg:flex-row flex-col lg:p-10 p-5 ">

      <div className=" lg:flex-col flex lg:items-start items-center flex-wrap  lg:space-y-5 lg:w-1/6 ">
        <button className="py-2 w-24  bg-green-500 text-sm text-white rounded-full">
          My Profile
        </button>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Security
        </p>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Teams
        </p>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Team Member
        </p>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Notification
        </p>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Billing
        </p>
        <p className="text-gray-500 text-sm pl-4 hover:text-green-500">
          Data Export
        </p>
        <p className="text-red-500 text-sm pl-4 pt-10 lg:block hidden">
          Delete Account
        </p> 

      </div>



      <div className="lg:w-5/6 lg:pl-7 lg:border-l lg:border-gray-200 lg:pt-0 pt-5 ">
 
        <div className=" flex items-center mb-3">
          <p className="font-semibold mr-auto">My Profile</p>
          <button className=" flex border outline-1 py-2 px-4 align-middle rounded-2xl items-center text-sm text-gray-500">
            Edit <PencilIcon className="ml-1 w-3 h-3" />
          </button> 
        </div> 
        <div className=" flex gap-x-5 items-center border rounded-lg outline-1 px-3 py-5 mb-5"> 
          <img
            src="/assets/img/male.jpg" 
            alt=""
            className=" w-20 h-20 rounded-full"
            />
          <div>
            
            <p className=" text-gray-700 font-semibold" >Developer Dev</p>
            <p className=" text-sm text-gray-500 font-semibold" >Team Manger </p>
            <p className=" text-sm text-gray-500" >Nairobi, Kenya</p>
          </div>  
        </div>


        <div className=" flex items-center mb-3">
          <p className="font-semibold mr-auto">Personal Information</p>
          <button className=" flex border outline-1 py-2 px-4 align-middle rounded-2xl items-center text-sm text-gray-500">
            Edit <PencilIcon className="ml-1 w-3 h-3" />
          </button> 
        </div>        
        <div className=" px-3 py-5 rounded-lg border outline-1 mb-5">
          <div className="grid gap-5 md:grid-cols-2"> 
            <div>
              <p className="  text-sm text-gray-500 " >First Name </p>
              <p className="  text-sm text-gray-700 font-semibold " >Developer</p>
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >Last Name </p>
              <p className="  text-sm text-gray-700 font-semibold " > Dev </p>
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >Email</p> 
              <p className="  text-sm text-gray-700 font-semibold " >teammanager@manager.co</p> 
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >Bio </p>
              <p className="  text-sm text-gray-700 font-semibold " >Team Manager </p>
            </div>
          </div> 
        </div>

        <div className=" flex items-center mb-3">
          <p className="font-semibold mr-auto">Address</p>
          <button className=" flex border outline-1 py-2 px-4 align-middle rounded-2xl items-center text-sm text-gray-500">
            Edit <PencilIcon className="ml-1 w-3 h-3" />
          </button> 
        </div>
               
        <div className=" px-3 py-5 rounded-lg border outline-1">
          <div className="grid gap-5 md:grid-cols-2"> 
            <div>
              <p className="  text-sm text-gray-500 " >Country</p> 
              <p className="  text-sm text-gray-700 font-semibold " >Kenya</p> 
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >County</p> 
              <p className="  text-sm text-gray-700 font-semibold " >Nakuru</p> 
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >Postal Address</p> 
              <p className="  text-sm text-gray-700 font-semibold " >1234 Nakuru</p> 
            </div>
            <div>
              <p className="  text-sm text-gray-500 " >KRA Pin</p>
              <p className="  text-sm text-gray-700 font-semibold " >AAA00000000</p>
            </div> 
          </div> 
          
        </div> 
        
      </div>


    </div>
      
    
    </>
  )
}
