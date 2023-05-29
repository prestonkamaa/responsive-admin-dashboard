

export default function SearchBarForm() {
  return (
    <form>   
        <label className=" text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="search" className="block lg:w-96 w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Search" required /> 
        </div>
    </form> 
  )
}
