import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

const Content = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getItems = async () => {
    const res = await fetch("http://localhost:3000/item", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setItems(data);
    setLoaded(true);
  };

  useEffect(() => {
    getItems();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Items are loading...</p>
      </>
    );
  }
  return (
    <>
      <Link to='create'>
        <button className='button crud is-success'>
          Vytvořit inzerát
        </button>
      </Link>
      {items.result.map((item) => (
        <Box id={item.id} name={item.name} age={item.price} image={item.image} />
      ))}
    </>
  );
};

export default Content;
