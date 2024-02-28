import React from "react";

const Shimmer = () =>{
    return (
    
        <div className="list" >
        {
            Array(15).fill("").map((e,index)=><div key={index} className="shimmer"></div>)
        }
        </div>
    )
}

export default Shimmer;