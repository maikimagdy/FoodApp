import { CardContent, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

function ItemList({ detail, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent className="overflow-y-auto h-auto max-h-60">
        <h1 className="text-3xl my-2">Ingredients :</h1>
        <Typography className="flex flex-col justify-between">
          {detail.extendedIngredients &&
            detail.extendedIngredients.map((obj) => (
              <div className="flex justify-between items-center">
                <img
                  className="w-10 h-10"
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    obj.image
                  }
                />
                <h3 className="text-xl ">{obj.aisle}</h3>
                <h3 className="w-1/4">
                  {obj.amount} {obj.unit}{" "}
                </h3>
              </div>
            ))}
        </Typography>
      </CardContent>
    </Collapse>
  );
}

export default ItemList;
