import React, { useState } from 'react'
import './app.css'

function App() {

    const [height,setHeightValue] = useState('');
    const [weight,setweightValue] = useState('');
    const [initialbmi , setbmi] = useState('');
    const [text,updatedtext] = useState('')

    const HeightValue = (e) =>{
        setHeightValue(e.target.value)
        // height=e.target.value
    }

    const weightValue = (e) =>{
        
        setweightValue(e.target.value)
    }

    // console.log(height,"  ",weight);


    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(height,"  ",weight," ",initialbmi);
        const bmi = Math.round((weight/(height/100*height/100))*10)/10;
        setbmi(bmi)
        setHeightValue('')
        setweightValue('')

        let message  = '';

        if (bmi < 18.5) { 
            message = 'You are Underweight'; 
        } else if (bmi >= 18.5 && bmi < 25) { 
            message = 'You are Normal weight'; 
        } else if (bmi >= 25 && bmi < 30) { 
            message = 'You are Overweight'; 
        } else { 
            message = 'You are Obese'; 
        } 
        updatedtext(message);
    }
    // console.log(height,"  ",weight," ",initialbmi);
    

  return (
<div className="container">
            <h1>BMI CALCULATOR</h1>
            <form onSubmit={handlesubmit}>
                <input className="input" value={height} type='number' placeholder='ENTER YOUR HEIGHT' onChange={HeightValue}/>
                <input className="input" value={weight} type='number' placeholder='ENTER YOUR WEIGHT' onChange={weightValue}/>
                <button className="button" type='submit'>Submit</button> 
            </form>
            {initialbmi && text && (
                <div className="result"> 
                    <p>Your BMI: {initialbmi}</p> 
                    <p>Result: {text}</p> 
                </div> 
            )}
        </div>
  )
}


export default App