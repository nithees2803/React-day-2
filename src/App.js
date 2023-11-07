import './App.css';

    export default function App(props) {
      return(
        
   <div className="App"> 
     <style className='pricetag'>{"body { background-color: #007bff;, background: linear-gradient(to right, #0062E6, #33AEFF);}"}</style>
      <h3 style={{color:"gray"}}>{props.table}</h3>
      <h1 className='price'>{props.price}
      <span >/month</span>
      </h1>
       <h4>{props.line1}</h4>
        <h4>{props.line2}</h4>
        <h4>{props.line3}</h4>
        <h4>{props.line4}</h4>
        <h4>{props.line5}</h4>
        <h4>{props.line6}</h4>
        <h4>{props.line7}</h4>
        <h4>{props.line8}</h4>
        <button className='btn'>Button</button>
       
   </div>
   

   
      );
    }
