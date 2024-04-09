import React from "react";
import Product from "./Products";

const Content = (props:any) => {

   const data=props.data
   console.log(data)
  return <div className=" grid grid-cols-3 gap-6 content-center">
    {data.map((e:any)=>(
        <Product data={e}/>
    
    ))}
    
    </div>;
};

export default Content;
