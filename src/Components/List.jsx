import React, { useState, useEffect }  from 'react';
import './styles.css';
function List() {
const [price, setPrice]=useState("");
const [dayfrom, setDayfrom]=useState("");
const [dayto, setDayto]=useState("");
const [added, setAdded]=useState("");
const [list, setList]=useLocalStorage("name" ,[]);
const localData = localStorage.getItem('name');


const handleSubmit=(e) => {
  e.preventDefault();
  console.log(price,dayfrom,dayto,added)
  const date={price,dayfrom,dayto,added}
  if(price&&dayfrom&&dayto&&added){
    setList((ls)=>[...ls,date])
    setPrice("")
    setDayfrom("")
    setDayto("")
    setAdded("")
  }
}
return (
<div className="container-head">
<h1 className="head"><i class="fas fa-bicycle"></i>Varna Bike Renting Company</h1>
<span className="text-price">Our prices are based on these periods:</span>
  <div className="col-sm-2 datesAdded">{localData}</div>
<hr></hr>
  <span>Section for adding our offers</span>
  <form onSubmit={handleSubmit}>
  <input name="price" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
    <input name="dayfrom" placeholder="dayfrom" value={dayfrom} onChange={(e)=>setDayfrom(e.target.value)} />
      <input name="dayto" placeholder="dayto" value={dayto} onChange={(e)=>setDayto(e.target.value)} />
        <input name="added" placeholder="added" value={added} onChange={(e)=>setAdded(e.target.value)} />
      <button className="btn btn-success btn-danger">Add</button>
    </form>
    </div>

);
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() =>{
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case

      console.log(error);
    }
  };
  return  [storedValue, setValue];
}
export default List;
