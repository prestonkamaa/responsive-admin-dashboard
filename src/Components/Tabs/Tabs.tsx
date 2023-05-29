import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";




export default function Tabs() {


  const [selectedTab, setSelectedTab] = useTabs([
    "documents",
    "projects",
    "photos",
    "files",
  ]);



  return (
    <>
 
 
      <nav className="flex border-b">
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
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "documents"}>Documents</TabPanel>
        <TabPanel hidden={selectedTab !== "projects"}>Projects</TabPanel>
        <TabPanel hidden={selectedTab !== "photos"}>Photos</TabPanel>
        <TabPanel hidden={selectedTab !== "files"}>Files</TabPanel>
      </div>  


    </>
  )
}
