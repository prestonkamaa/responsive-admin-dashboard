import {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

// type Datepickers = {
//     newValue: string
// }

export default function Datess() {


    const [value, setValue] = useState({ 

        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
        
        }); 
        
        const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        
        } 



  return (
<></>

    // <Datepicker value ={value} onChange={handleValueChange} /> 
    // <Datepicker value ={value} onChange={handleValueChange} /> 



  )
}
