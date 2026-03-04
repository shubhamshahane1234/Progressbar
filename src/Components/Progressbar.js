// import "./styles.css";
import {useState,useEffect} from "react"

export default function Progressbar({progressPercent}) {
    const [percent,setPercent] =useState(0)

useEffect(()=> {
setPercent(progressPercent)
},[])

  return (

    <div className="bar-container">
     <div className = "bar-progress" style ={{transform:`translateX(${percent-100}%)`}}>  <span className ="bar-percent"> {percent}%</span></div>
    </div>
  );
}
