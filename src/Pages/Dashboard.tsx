
import NormalButton from "../Components/Button/NormalButton";
import GreenDropDownButton from "../Components/Button/GreenDropDownButton";
import Test from "./Test";
import { BellIcon, ChevronRightIcon, CurrencyDollarIcon, EllipsisVerticalIcon, SunIcon, UserGroupIcon, UserMinusIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/solid";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import LineGraph from "../Components/Charts/LineChart/HomeLineGraph"; 
 
Chart.register(CategoryScale); 

export default function Dashboard() {
  return (
    <> 
    

 
    <div className="p-5"> 
      <div className=" flex lg:flex-row flex-col lg:items-center pb-5"> 
        <div className="flex mr-auto ">
          <div className=" rounded-full  bg-green-500 w-16 h-16 text-white flex items-center justify-center ">
            <SunIcon className="w-12 h-12" />
          </div>
          <div className=" items-center flex">
            <div className="flex pl-2"> 
              <p className=" text-6xl font-medium text-gray-500 ">75</p>
              <p className=" text-3xl text-gray-500">&deg;</p> 
            </div>
            
            <div className=" ml-3 text-center">
              <p className="text-xl font-bold text-gray-500">Wednesday</p>
              <p className="text-md text-gray-500">Nairobi, Kenya</p> 
            </div>
          </div>
          
            
        </div>
 
        <div className="flex lg:flex-row flex-col lg:gap-x-3 lg:mt-0 mt-3 lg:space-y-0 space-y-3 ">
          <div> 
            <form>   
                <label className=" text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Search" required /> 
                </div>
            </form> 
          </div>
          
          <div>
            <NormalButton name="+ ADD PROJECT" icon=""  />
          </div>
          
          <div>
            <Test />
          </div>
          <div className=" lg:flex items-center justify-center relative border rounded-full w-10 h-10 hidden">
            <div className="rounded-full w-2 h-2 bg-red-600 absolute top-0 right-0"/>
            <BellIcon className=" w-5 h-5" />
          </div>

        </div>

        
        

      </div>

      <div className=" flex lg:flex-row flex-col lg:items-center">
        <div className=" mr-auto lg:pb-0 pb-5">
          <p className=" text-gray-500 text-xl font-bold">Welcome, Random Viewer :)</p>
          <p className=" text-gray-500 text-lg">Manager</p>
        </div>

        <div className=" flex lg:flex-nowrap flex-wrap lg:gap-10 gap-y-5 lg:items-center ">
          <div className=" flex items-center lg:mr-0 mr-auto">
            <div className=" flex rounded-full w-12 h-12 opacity-50 bg-green-100 text-green-600 items-center justify-center mr-4">
              <CurrencyDollarIcon className=" w-6 h-6" /> 
            </div> 
            <div >
              <p className=" text-gray-500 font-bold">Ksh. 12,099</p>
              <p className=" text-gray-500 text-sm "> Net Benefit</p>
            </div> 
          </div> 
          <div className=" flex items-center">
            <div className=" flex rounded-full w-12 h-12 opacity-50 bg-red-100 text-red-600 items-center justify-center mr-4">
              <CurrencyDollarIcon className=" w-6 h-6" /> 
            </div> 
            <div>
              <p className=" text-gray-500 font-bold">Ksh. 12,099</p>
              <p className=" text-gray-500 text-sm "> Net Benefit</p>
            </div> 
          </div>
          <div className=" flex items-center">
            <div className=" flex rounded-full w-12 h-12 opacity-50 bg-orange-100 text-orange-600 items-center justify-center mr-4">
              <CurrencyDollarIcon className=" w-6 h-6" /> 
            </div> 
            <div>
              <p className=" text-gray-500 font-bold">Ksh. 12,099</p>
              <p className=" text-gray-500 text-sm "> Net Benefit</p>
            </div> 
          </div>
          <div className="">
            <ChevronRightIcon className=" w-6 h-6 lg:block hidden" />
          </div>
        </div>

        
 
      </div> 
    </div>

    <hr className="py-5"/>

    <div className="flex lg:flex-row flex-col gap-5 px-5 pb-5  ">
      <div className=" lg:w-2/3">
        <div className=" flex items-center pb-5"> 
            <p className=" text-sm text-gray-500 font-semibold mr-auto">Users Gained between 2016-2023</p> 
            <GreenDropDownButton name="Duration" /> 
        </div>
        <div>
          <LineGraph />
        </div>

        <div>  
          
          <div className=" overflow-x-auto border border-gray-200 md:rounded-lg mt-8">
              <table className="min-w-full divide-y divide-gray-200  ">
                  <thead className="bg-gray-50  ">
                      <tr>
                          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-gray-500 ">
                              <div className="flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
                                  <button className="flex items-center gap-x-2">
                                      <span>Invoice</span>
  
                                      <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                          <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                          <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                      </svg>
                                  </button>
                              </div>
                          </th>
  
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-gray-500 ">
                              Date
                          </th>
  
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-gray-500 ">
                              Status
                          </th>
  
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-gray-500 ">
                              Customer
                          </th>  
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                      <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
  
                                  <span>#3066</span>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 6, 2022</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60  ">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
  
                                  <h2 className="text-sm font-normal">Paid</h2>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                  <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                  <div>
                                      <h2 className="text-sm font-medium text-gray-800">Arthur Melo</h2>
                                      <p className="text-xs font-normal text-gray-600 ">authurmelo@example.com</p>
                                  </div>
                              </div>
                          </td>
                           
                      </tr>
  
                      <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
  
                                  <span>#3065</span>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 5, 2022</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60  ">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
  
                                  <h2 className="text-sm font-normal">Cancelled</h2>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                  <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                  <div>
                                      <h2 className="text-sm font-medium text-gray-800">Andi Lane</h2>
                                      <p className="text-xs font-normal text-gray-600 ">andi@example.com</p>
                                  </div>
                              </div>
                          </td>
                           
                      </tr>
  
                      <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
  
                                  <span>#3064</span>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 5, 2022</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60  ">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
  
                                  <h2 className="text-sm font-normal">Paid</h2>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                  <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" />
                                  <div>
                                      <h2 className="text-sm font-medium text-gray-800">Kate Morrison</h2>
                                      <p className="text-xs font-normal text-gray-600 ">kate@example.com</p>
                                  </div>
                              </div>
                          </td>
                           
                      </tr>
  
                      <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
  
                                  <span>#3063</span>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 4, 2022</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60  ">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
  
                                  <h2 className="text-sm font-normal">Paid</h2>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                  <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80" alt="" />
                                  <div>
                                      <h2 className="text-sm font-medium text-gray-800">Candice Wu</h2>
                                      <p className="text-xs font-normal text-gray-600 ">candice@example.com</p>
                                  </div>
                              </div>
                          </td>
                           
                      </tr>
  
                      <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                  <input type="checkbox" className="text-green-500 border-gray-300 rounded      " />
  
                                  <span>#3062</span>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 4, 2022</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60  ">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
  
                                  <h2 className="text-sm font-normal">Refunded</h2>
                              </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                  <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" alt="" />
                                  <div>
                                      <h2 className="text-sm font-medium text-gray-800">Orlando Diggs</h2>
                                      <p className="text-xs font-normal text-gray-600 ">orlando@example.com</p>
                                  </div>
                              </div>
                          </td>
                           
                      </tr>
                  </tbody>
              </table>
          </div> 
  
          <div className="flex items-center justify-between mt-6">
              <a href="m.com" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100      ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
  
                  <span>
                      previous
                  </span>
              </a>
  
              <div className="items-center hidden md:flex gap-x-3">
                  <a href="m.com" className="px-2 py-1 text-sm text-green-500 rounded-md   bg-green-100/60">1</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">2</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">3</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">...</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">12</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">13</a>
                  <a href="m.com" className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100">14</a>
              </div>
  
              <a href="m.com" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100      ">
                  <span>
                      Next
                  </span>
  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </a>
          </div>   
        </div> 
      </div>




      <div className=" lg:w-1/3">
        <div className=" ">
          <p className="  text-gray-500 ">User Activity</p> 
          <div className=" p-5">

            <div className=" flex gap-x-3 items-center pb-3"> 
            <div className=" bg-green-100 p-3 rounded-lg text-green-500 ">
                <UserGroupIcon className="w-12 h-12" />
            </div>
            <div>
              <p className="text-gray-600 text-sm "> Online Visitors </p> 
              <p className="text-gray-600 text-lg font-bold "> 564,000 </p> 
            </div>
                  
            </div>

            <div className=" flex gap-x-3 items-center pb-3"> 
              <div className=" bg-red-100 p-3 rounded-lg text-red-500 ">
                  <UserMinusIcon className="w-12 h-12" /> 
              </div>
              <div>
                <p className="text-gray-600 text-sm "> Offline Visitors </p>
                <p className="text-gray-600 text-lg font-bold "> 756,000 </p>
              </div>            
                 
            </div>

          </div>
          
          

        </div>
        
        <div className=" text-gray-500 ">
          <p className="pb-5">Upcoming Products</p>

          <div className=" flex border mb-3 p-4">
            <img 
              src="/assets/img/male.jpg"
              className="w-12 h-12 rounded-full mr-4"
              alt="" 
            />
            <div className="mr-auto">
              <p className=" flex items-center text-gray-600 text-sm "> <ClockIcon className="w-5 h-5 text-green-500 mr-2" /> 10 Apr, 2023</p>
              <p className="text-gray-600 font-bold ">Construction Materials </p>
              <p className="text-gray-600 text-sm ">Foreign Supplies</p>
            </div>
            <EllipsisVerticalIcon className=" w-5 h-5 text-gray-500" />
          </div>

          <div className=" flex border mb-3 p-4">
            <img 
              src="/assets/img/male.jpg"
              className="w-12 h-12 rounded-full mr-4"
              alt="" 
            />
            <div className="mr-auto">
              <p className=" flex items-center text-gray-600 text-sm "> <ClockIcon className="w-5 h-5 text-green-500 mr-2" /> 10 Apr, 2023</p>
              <p className="text-gray-600 font-bold ">Construction Materials </p>
              <p className="text-gray-600 text-sm ">Foreign Supplies</p>
            </div>
            <EllipsisVerticalIcon className=" w-5 h-5 text-gray-500" />
          </div>
 
          <div className=" flex border mb-3 p-4">
            <img 
              src="/assets/img/male.jpg"
              className="w-12 h-12 rounded-full mr-4"
              alt="" 
            />
            <div className="mr-auto">
              <p className=" flex items-center text-gray-600 text-sm "> <ClockIcon className="w-5 h-5 text-green-500 mr-2" /> 10 Apr, 2023</p>
              <p className="text-gray-600 font-bold ">Construction Materials </p>
              <p className="text-gray-600 text-sm ">Foreign Supplies</p>
            </div>
            <EllipsisVerticalIcon className=" w-5 h-5 text-gray-500" />
          </div>
 
          
          

          
        </div>
      </div>

    </div>






  </>
    
  )
}
