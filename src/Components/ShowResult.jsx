import React, { useState, useEffect }  from 'react';
import CalculateTotal from '../Components/CalculateTotal';

function ShowResult(){
  const [dateFrom, setDateFrom]=useState("");
  const [dateTo, setDateTo]=useState("");

const [llist2, setList2]=useState('');
const handleSubmit=(e) => {
  e.preventDefault();
//  console.log(price,dayfrom,dayto,added)
  const promen={dateFrom,dateTo}

  if(dateFrom&&dateTo){
    setList2((ls)=>[...ls,promen])

    setDateFrom("")
    setDateTo("")
  }
}
const total=CalculateTotal(dateFrom,dateTo);
return (
  <div className="Listd">

  <hr></hr>
  <span>Please enter the desired period following the example : 2020-01-01 / 2020-01-03</span>
  <form onSubmit={handleSubmit}>
    <input name="dayfrom" placeholder="Select day from" value={dateFrom} onChange={(e)=>setDateFrom(e.target.value)} />
      <input name="dayto" placeholder="Select day to" value={dateTo} onChange={(e)=>setDateTo(e.target.value)} />
      </form>
      <span>Total price for selected period : </span>
       <button type="button" class="btn btn-dark">{total} BGN</button>
</div>
);

}
export default ShowResult;
