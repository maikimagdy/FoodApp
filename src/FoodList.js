import React, { useState } from "react";
import OneItem from "./OneItem";
import Reciep from "./Reciep";

function FoodList({ data }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div>
      {data.map((e) => (
        <div className="m-4">
          <OneItem
            title={e.title}
            img={e.image}
            id={e.id}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
        </div>
      ))}
    </div>
  );
}

export default FoodList;
