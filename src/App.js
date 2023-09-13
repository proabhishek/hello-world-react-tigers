import React from "react"  // 17.2
import Button from "./Components/Button"

const App = () => {


    return(
        <div>
                <h1> Fruits </h1>
                <Button 
                  name="Apple" 
                  price= {100}
                  color="green"
                //   eaters = {["A","B","C"]}
                />
                {/* <Button 
                    name="Orange"
                    color="orange"
                    
                />
                <Button 
                    name="Banana"
                    price={300}
                    color="yellow"
                /> */}
        </div>
    )
}







export default App



// function App(){

//     let a = 10
//     let hello = "Hello World"
  
//   //   let styleH1 = {
//   //     color: "tomato",
//   //     textAlign: "center",
//   //   }
  
  
//       return( 
//           <div>
//                {/* <h1 style={styleH1} > Hello World , {a} </h1> */}
  
//                <h1 style={{color:"tomato", textAlign:"center"}} > Hello World , {a} </h1>
  
//                <p> {2+3+4+5+a} </p>
//                {hello}
//                <p className='para' >This is a paragraph</p>
//                <button>Apple</button>
//                <button>Orange</button>
//                <button>Banana</button>
//           </div>
//       )
// } 

