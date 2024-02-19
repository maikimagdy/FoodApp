import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Reciep from "./Reciep";

export default function OneItem({ title, img, id, openItem, setOpenItem }) {
  const isOpen = openItem === id;

  const handleClick = () => {
    setOpenItem(isOpen ? null : id);
  };
  console.log(openItem);
  return (
    <div className="flex justify-between">
      <Card className="w-1/2" sx={{ maxWidth: 345, maxHeight: 345 }}>
        <CardMedia sx={{ height: 140 }} image={img} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-center"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-center">
          <Button variant="contained" onClick={handleClick}>
            {isOpen ? "Hide Reciep" : " View recipes"}
          </Button>
        </CardActions>
      </Card>
      <div>{isOpen && <Reciep id={id} />}</div>
    </div>
  );
}
