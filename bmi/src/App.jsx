import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");
  const bmicalculator=()=>{
    const isHeight = /^\d+$/.test(height);
    const isWeight = /^\d+$/.test(weight);
    if(isHeight && isWeight){
      const heightMeter= height/100;
      const bmiValue= weight / (heightMeter*heightMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5){
        setBmiStatus("Under Weight");
      }
      else if(bmiValue >=18.5 && bmiValue < 24.9){
        setBmiStatus("Normal Weight");
      } 
      else if(bmiValue >= 25 && bmiValue < 29.9){
        setBmiStatus("Over Weight");
      }
      else {
          setBmiStatus("Obese");
        }
        setError("")
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valid numeric values for height and weight");
    }
  };

  const clear=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }

  return (
    <>
      <div className="bmicontainer">
        <div className="box"></div>
        <div className="data">
        <h1>BMI CALCULATOR</h1>
        {error &&<p className="error">{error}</p>}
        <div className="inputcontainer">
          <label htmlFor="height">Height (cm): </label>
          <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className="inputcontainer">
          <label htmlFor="weight">Weight (kg): </label>
          <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>  
          <button onClick={bmicalculator}>Calculate BMI</button>
          <button onClick={clear}>Clear</button>
          {bmi!==null && (
            <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmistatus}</p>
          </div>
        )}
        </div>
      </div>
    </>
  )
}

export default App
