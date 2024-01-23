import React,{ useState } from "react";

function Props(props) {
    const [value, setCount] = useState(0);
  
    const increase = ()=>{
      setCount(value+1);
    }
    return (
      <div>
        {props.render(value,increase)}
      </div>
    )
  }
  
  export default Props