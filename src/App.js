import "./styles.css";
import Progressbar from "./Components/Progressbar"
export default function App() {
  let percents = [20,50,10,40,80]
  return (
    <div className="App">
      <h1 className = "heading">Progress Bar</h1>
      {percents.map((p)=>    <Progressbar progressPercent = {p}/>)}
    
      
    </div>
  );
}
