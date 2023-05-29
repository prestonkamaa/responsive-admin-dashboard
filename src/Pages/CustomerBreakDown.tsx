import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../Components/Tabs/TabSelector";
import {ChevronDownIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline"; 

import CustomerTopbar from "../Components/TopBar/CustomerTopbar"; 

import { PhoneArrowUpRightIcon,MapPinIcon,EnvelopeIcon } from "@heroicons/react/24/solid";  
import ServiceStatusCard from "../Components/Cards/ServiceStatusCard"

import StatusDropDownButton from "../Components/Button/StatusDropDownButton"
import GreenDropDownButton from "../Components/Button/GreenDropDownButton"
import SmallStats from "../Components/Cards/SmallStats"; 
import SearchBarForm from "../Components/SearchBarForm";

 


export default function CustomerBreakDown(){

 
    const [selectedTab, setSelectedTab] = useTabs([
        "documents",
        "projects",
        "photos",
        "files",
      ]); 


 




    return(
        <>

        <CustomerTopbar />
  

        <div className="m-5">
 
            

            <div className="flex lg:overflow-x-auto md:overflow-x-auto overflow-x-hidden lg:gap-x-10 lg:grid-cols-3 lg:flex-nowrap md:flex-nowrap flex-wrap mb-7 lg:space-y-0 space-y-5"> 
               

                <div className=" lg:grow-0 md:grow-0 grow ">
                    <div className=" flex">
                        <p className="text-sm text-gray-700 pr-3 mb-4 font-medium ">TOTAL ESTIMATES </p>
                        <p className=" bg-green-100 flex items-center justify-center text-green-500 text-sm rounded-md w-7 h-5">10</p>
                    </div>
                    <div className=" flex gap-3 ">  
                        <SmallStats amount="12.2K" status="ACCEPTED" totalInvoices="2" />
                        <SmallStats amount="12.2K" status="PENDING" totalInvoices="2" />  
                        
                    </div>
                </div> 
                
                <div className=" lg:grow-0 md:grow-0 grow ">
                    <div className=" flex">
                        <p className="text-sm text-gray-700 pr-3 mb-4 font-medium ">CHANGE ORDERS</p>
                        <p className=" bg-green-100 flex items-center justify-center text-green-500 text-sm rounded-md w-7 h-5">10</p>
                    </div>
                    <div className=" flex gap-3"> 
                        <SmallStats amount="12.2K" status="ACCEPTED" totalInvoices="2" />
                        <SmallStats amount="12.2K" status="PENDING" totalInvoices="2" />   
                    </div>
                </div>


 
                <div className=" lg:grow-0 md:grow-0 grow">
                    <div className=" flex ">
                        <p className="text-sm text-gray-700 pr-3 mb-4 font-medium ">INVOICES </p>
                        <p className=" bg-green-100 flex items-center justify-center text-green-500 text-sm rounded-md w-7 h-5">10</p>
                    </div>
                    <div className=" flex gap-3  "> 
                        <SmallStats amount="12.2K" status="ACCEPTED" totalInvoices="2" />
                        <SmallStats amount="12.2K" status="OVERDUE" totalInvoices="2" />  
                        <SmallStats amount="12.2K" status="ACCEPTED" totalInvoices="2" />
                        <SmallStats amount="12.2K" status="DRAFT" totalInvoices="2" />                                                
                        
                    </div>
                </div>



            </div>


    
            <div className=" lg:flex "> 

            <div className=" rounded-xl border-2 lg:h-[820px] lg:w-1/4 lg:overflow-hidden overflow-y-auto h-72">


                <div className=" flex mt-5 px-3">
                    < img 
                        src={process.env.PUBLIC_URL + "/assets/img/female.jpg"} 
                        className=" rounded-full w-12 h-12 mr-3"                 
                        alt=""
                    />
                    <div>
                        <p className=" text-sm font-medium">
                            Carole Johnston
                        </p>
                        <p className=" text-sm text-gray-500">
                            System Admin
                        </p>
                    </div>

                </div>

                <div className=" mt-5">
                    <p className="text-sm text-gray-500 font-normal px-3 mb-4">CUSTOMER INFO</p>

                    <div className="px-3">
                    
                        <div className=" flex pb-3">
                            <div className=" mr-3">
                                <EnvelopeIcon className=" h-5 w-5 text-gray-400" />  
                            </div> 
                            <div className=" text-sm font-medium">
                                <p className="pb-1"><span className=" text-gray-400">Work:</span> randomuser@mail.co.ke</p>
                                <p><span className=" text-gray-400">Personal:</span> randomuser@mail.co.ke</p>
                            </div>
                            <div>
                                <DocumentDuplicateIcon className=" h-5 w-5 text-gray-400" /> 
                            </div>

                        </div>
                        <div className=" flex pb-3">
                            <div className=" mr-3">
                                <PhoneArrowUpRightIcon className=" h-5 w-5 text-gray-400"/>
                            </div>
                            <div className=" text-sm font-medium">
                                <p className="pb-1"><span className=" text-gray-400">Work:</span> (254) 700 000 000</p>
                                <p><span className=" text-gray-400">Personal:</span> (254) 700 000 000</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <div className=" mr-3">
                                <MapPinIcon className=" h-5 w-5 text-gray-400" />
                            </div> 
                            <div className=" text-sm font-medium">
                                <p className="pb-1"> Moi Avenue, next to Ambassadeur Hotel, Nairobi</p>
                                <p> Moi Avenue, next to Ambassadeur Hotel, Nairobi</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className=" border-y-2 my-5 py-5 px-3">
                        <p className=" pb-2 text-sm text-gray-500 font-normal">LEAD SOURCE</p>
                        <p className=" text-sm font-medium">Facebook Ad</p>
                    </div>
                    <div className=" border-b-2 my-5 pb-5 px-3">
                        <p className=" pb-2 text-sm text-gray-500 font-normal">CREATED</p>
                        <p className=" text-sm font-medium"><span className="text-gray-500">By</span> Gavin Howard <span className="text-gray-500">on</span> 03/01/2023</p>
                    </div>
                    <div className=" border-b-2 my-5 pb-5 px-3">
                        <p className=" pb-2 text-sm text-gray-500 font-normal">SALES REPRESENTATIVES</p>
                        <div className=" flex items-center">
                            < img
                                src={process.env.PUBLIC_URL + "/assets/img/male.jpg"}
                                className=" rounded-full w-8 h-8 mr-2" 
                                alt=""
                            /> 
                            
                            <p className=" mr-2 text-sm font-medium"> Edwin Ramirez</p> 

                            <ChevronDownIcon className=" w-3 h-3" />
                        </div>

                    </div>

                    <div className=" my-5 pb-5 px-3">
                        <p className=" pb-2 text-sm text-gray-500 font-normal">NOTES</p>
                        <p className=" text-sm font-medium">It is a long established fact that a reader will be distracted by the 
                            readable content of a page when looking at its layout.
                        </p>
                    </div>                    



                </div> 
            </div> 
    
            <div className="  lg:ml-5 lg:w-3/4 lg:mt-0 mt-5">
                <nav className="lg:flex flex-wrap border-b">
                    <TabSelector
                    isActive={selectedTab === "documents"}
                    onClick={() => setSelectedTab("documents")}
                    >
                    Documents <p className=" bg-green-100 ml-2 flex items-center justify-center text-green-500 text-sm rounded-md w-7 h-5">10</p>
                    </TabSelector>
                    <TabSelector
                    isActive={selectedTab === "projects"}
                    onClick={() => setSelectedTab("projects")}
                    >
                    Projects <p className=" bg-gray-100 ml-2 flex items-center justify-center text-gray-500 text-sm rounded-md w-7 h-5">10</p>
                    </TabSelector>
                    <TabSelector
                    isActive={selectedTab === "photos"}
                    onClick={() => setSelectedTab("photos")}
                    >
                    Photos <p className=" bg-gray-100 ml-2 flex items-center justify-center text-gray-500 text-sm rounded-md w-7 h-5">10</p>
                    </TabSelector>
                    <TabSelector
                    isActive={selectedTab === "files"}
                    onClick={() => setSelectedTab("files")}
                    >
                    Files <p className=" bg-gray-100 ml-2 flex items-center justify-center text-gray-500 text-sm rounded-md w-7 h-5">10</p>
                    </TabSelector>
                </nav>
                <div className="py-4">
                    <TabPanel hidden={selectedTab !== "documents"}>
                        
                        <div className="lg:flex items-center align-middle">
                            <div className="mr-auto">
                                <SearchBarForm />
                            </div>
                            <div className=" lg:flex gap-x-3 lg:pt-0 pt-3 lg:space-y-0 md:space-y-0 space-y-3">
                                <StatusDropDownButton name="STATUS" />  
                                <GreenDropDownButton name="CREATE DOCUMENT" /> 
                            </div> 

                        </div>

                        <div className=" flex flex-wrap gap-x-5 gap-y-5 pt-5">
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="ACCEPTED"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022" 
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="ACCEPTED"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="DRAFT"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="PENDING"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="ACCEPTED"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="OVERDUE"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                                <ServiceStatusCard 
                                    clientProject="Faruk Birthroom Remodel"
                                    projStatus="ACCEPTED"
                                    balance="12,099"
                                    value="18,099"
                                    documents="Change Order #00001"
                                    startDate="08/08/2022"
                                    endDate="08/08/2022"
                                /> 
                        </div>







                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "projects"}>Projects</TabPanel>
                    <TabPanel hidden={selectedTab !== "photos"}>Photos</TabPanel>
                    <TabPanel hidden={selectedTab !== "files"}>Files</TabPanel>
                </div>  
            </div> 

            </div>

        </div>
































        </>
    )
}