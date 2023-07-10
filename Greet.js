// functional components
import React from "react";
function Greet(props){
    console.log(props);
    return <h1> hello,{props.name},{props.phone}</h1>
    

}
export default Greet;