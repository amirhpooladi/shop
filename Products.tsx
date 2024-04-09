import React from "react";

const Product = (props: any) => {
  console.log(props);
  return (
    <div className=" max-w-[300px] rounded-lg ">
      <div className="">
        <div className="">
          <img
            className=" h-[200px] object-contain w-[200px] mb-3 rounded-lg"
            src={props.data.image}
            alt={props.data.title}
          />
        </div>
        <div className="">
          <h2 className=" text-xl font-extrabold">{props.data.title}</h2>
          <div className="">
            <div className=" text-base font-normal">${props.data.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
