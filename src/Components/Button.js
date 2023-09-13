import React from "react"; 

const Button = ({name, price, color}) =>{

    // let hello = "{}"

    // console.log("Props",props)  // {name: "Apple"}
    // props.name="Mango"
    // console.log("Props",props)  // {name: "Mango"}

    return(
        <div>
            <button style={{color: color}}> {name} </button> 
             {
              price ? 
              <p> Price of  {name} is {price}</p> : 
              <p> Out of Stock </p>
             }
             {/* <h1> {`{}`} </h1> */}

        </div>
    )

}

export default Button



// props => properties

// conditions => if else => ternary operator 

// loops => higher order function => map, filter, reduce, find, findIndex, forEach