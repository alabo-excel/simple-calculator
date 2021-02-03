import '../App.css';
import React,{useState} from 'react'


function Calculator() {
  const [count, setCount] = useState(0)
  const num = [0,1,2,3,4,5,6,7,8,9,'-','+'];

  function handleClick(e){
    setCount(count + e.target.value)
  }
  function handleChange(e){
    e.prevent.default()
  }
  function sum(){
    console.log(eval(count))
  }

  return (
    <div className="Calculator">
      <div>
        <input className="filling" onChange={(e) => handleChange(e)} type="text" value={count} />
      </div>
      <div className="container">
        {
          num.map((single, pos) => <input key={pos} onClick={(e) => handleClick (e)} type="button" value={single} />)
        }
        <input id="sum" type="submit" value="=" onClick={sum} />
      </div>
    </div>
  );
}

export default Calculator;
