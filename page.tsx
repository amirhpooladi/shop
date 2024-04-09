import Content from "./Content";

const getData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });

     const dataJson= await data.json();
     return dataJson
  } catch(er) {

    console.log(er)
  }
};

const Main = async () => {
    const data= await getData()
  return (
    <div>
      <Content data={data} />
    </div>
  );
};

export default Main;
