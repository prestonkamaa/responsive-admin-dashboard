import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import CustomerBreakDown from "./Pages/CustomerBreakDown"; 
import TimeTracking from "./Pages/TimeTracking";        
import TaskList from "./Pages/TaskList";
import LeadPipeline from "./Pages/LeadPipeline";
import Estimates from "./Pages/Estimates";
import Invoices from "./Pages/Invoices";
import Projects from "./Pages/Projects";
import Schedule from "./Pages/Schedule";
import PhotosFiles  from "./Pages/PhotosFiles";
import Maps from "./Pages/Maps";
import Reports from "./Pages/Reports"; 
import PageNotFound from "./Pages/PageNotFound"; 
import Profile from "./Pages/Profile"; 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>  
      {/* <Route path="login" element={<Login />} /> */}
      <Route element={<Layout />} > 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<CustomerBreakDown />} />
        <Route path="timetracking" element={<TimeTracking />} />
        <Route path="tasklist" element={<TaskList />} />
        <Route path="leadpipeline" element={<LeadPipeline />} />
        <Route path="estimates" element={<Estimates />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="projects" element={<Projects />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="photosfiles" element={<PhotosFiles />} />
        <Route path="maps" element={<Maps />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Route> 
      {/* <Route path="*" element={<PageNotFound />} />  */}
    </Route>
  )
);


function App() {
  return (
    <> 
      <RouterProvider router={router} />  
    </>
  );
}

export default App;
