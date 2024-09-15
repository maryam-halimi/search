import React,{useState } from "react";
import SpellCheckInput from "./index.jsx";
import cities from './cities.json'

const nameCity = cities;
function App() {
  const [search, setSearch] = useState('');
  const [filterCities, setFilterCities] = useState(nameCity);
  const[suggestedCities,setSuggestedCities] = useState([]);
      const handleChange = (e) => {
      const inputValue = e.target.value;
      setSearch(inputValue)
      const filterCities = nameCity.filter((city)=>{
        return city.startsWith(inputValue);
      })  
      setFilterCities(filterCities);
      const suggestedCities = filterCities.slice(0,5);
      setSuggestedCities(suggestedCities);
      }
      return <div>
        <SpellCheckInput 
        suggestedCities={suggestedCities}
        handleChange={handleChange}
         search={search}  
        />
      </div>
   
}

export default App;
