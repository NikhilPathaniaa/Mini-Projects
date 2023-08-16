import React from 'react'


function calculator() {
    
    function Calc(date, mpnth, year){
        return date-15;
    }
  return (
    <div className='container'>
        <form>
            <label>DAY</label>
            <input type='number' placeholder='DD' className='date'/>
            <label>MONTH</label>
            <input type='number' placeholder='MM' className='month'/>
            <label>YEAR</label>
            <input type='number' placeholder='YYYY' className='Year '/>
            <button onClick={Calc}>Submit</button>
        </form>
    </div>
  );
}

export default calculator