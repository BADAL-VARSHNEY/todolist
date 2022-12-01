import { useState } from "react";
import './App.css';

function App(){
     const [input, setInput] = useState('')
     const [active, setActive]= useState([])
    
    
     function myenterbtn(a) {
  a.preventDefault();
           setActive((active)=>{
               const update = [...active, input];
               setInput("")
               return update
           })
     }

     function removebtn(ind) {
          const remove = active.filter((v,i)=>{
               return ind!==i
             
          })
          setActive(remove)
     }
     return(
          <>
        <div className="main">
          <form onSubmit={myenterbtn}>
          <h1 className="head1" >Todo List</h1>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} /> 
                    <button type="submit" disabled={input.length===0}  onClick={myenterbtn}><i className="fa-solid fa-plus"></i></button>
          </form>
     
         {active.map((valu, ind)=>{
                 return(
                    <>
                         <div className="inp-size" key={ind}>
                         <div className="dis-flex">
                              <h2 className="hea2">{ind+1}.</h2>
                              <h2 className="hea2">{valu}</h2>
                         </div>
                              <button className="btn" onClick={()=>removebtn(ind)} ><i className="fa-solid fa-delete-left"></i></button>
                         </div>
                         
                    </>
                 )
         })}
         </div>
          </>
     )
}
export default App;