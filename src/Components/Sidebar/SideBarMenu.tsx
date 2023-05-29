
import { NavLink } from "react-router-dom"
import { useState } from "react"
import {Bars4Icon, ChevronRightIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {CheckCircleIcon} from "@heroicons/react/24/solid"
import { SideMenuItemsData } from "./SideMenuItemsData"
 

export default function SideBar(){

    const [openMenu, setOpenMenu] = useState(false);  

    function showMenu(){
        setOpenMenu(!openMenu)
    } 
    


    return(
        <> 
            <div className=" border-r-[1px] lg:bg-white bg-slate-50 lg:shadow-none shadow-lg">
                <div className="px-5">
                    <div className=" flex items-center">
                        <img 
                        src="/assets/img/logo.png" 
                        width={163} 
                        height={43} 
                        className="pb-5 pt-3 mr-auto"
                        alt="" 
                        /> 
                        <div onClick={showMenu}  className=" p-2 lg:hidden  text-green-500  border-green-600">
                            
                            { openMenu ? <XMarkIcon  className="w-8 h-8" /> : <Bars4Icon className=" w-8 h-8" />} 
                            
                        </div>
                    </div>
                    

                    <form className="pb-2">   
                        <label className=" text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search" required /> 
                        </div>
                    </form> 
                </div>
 
                <div className={` px-5 pt-3 mb-5 ${(openMenu) ? "block": "lg:block hidden"}`}>

                    <p className="flex pb-3 text-sm items-center text-gray-500"> MAIN MENU</p>

                        {SideMenuItemsData.map((menu,i)=>{

                            return(
                                <NavLink onClick={() => setOpenMenu(!openMenu)} key={i}  to={menu.titleLink} className={({ isActive }) => isActive ? "flex gap-x-3 pl-2 py-2 items-center text-sm rounded-md cursor-pointer text-green-400 hover:text-green-400 hover:bg-green-100 bg-green-100 border-l-4 border-green-300" : 
                                "flex gap-x-3 pl-2 py-2 items-center text-sm rounded-md cursor-pointer text-gray-500 hover:text-green-400 hover:bg-green-100" }>                              
                                    <div className=" w-5 h-5 ">{menu.icon}</div> 
                                    <div> {menu.title} </div> 
                                </NavLink> 
                            )

                        })}

                </div>

                <div className="lg:pb-8 pb-0" />

                <div className=" lg:block hidden px-5 border-t-[1px] pt-5  pb-5">
                    <div className="flex items-center">
                        <div className="mr-auto flex items-center">
                            <img src="/assets/img/female.jpg" 
                                className="rounded-full mr-2"
                                width={40} 
                                height={40} 
                                alt="" 
                            />
                            <p className="font-medium text-sm"> Jane Doe </p>
                        </div> 
                            <ChevronRightIcon className="w-4 h-4"/> 
                        
                    </div>
                    <div className="flex align-middle items-center mt-5">
                        <div className="text-sm mr-auto">
                            <p className=" font-medium"> 8:25 AM</p>
                            <p className=" text-gray-500"> Feb 20, 2023</p>
                        </div>
                        <CheckCircleIcon className="w-4 h-4 text-gray-500"/>
                    </div>
                </div>
 


            </div>

             







        </> 
    ) 
} 