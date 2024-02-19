import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ItemList from "./ItemList";
import Instructions from "./Instructions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Reciep({ id }) {
  const Url = `https://api.spoonacular.com/recipes/${id}/information`;
  const Key = "de36cdf6291c4013ae6f23500059f730";
  const [detail, setdetail] = useState({});
  useEffect(() => {
    const Details = async () => {
      try {
        const res = await axios.get(`${Url}?apiKey=${Key}`);
        setdetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    Details();
  }, [id]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(detail);
  return Object.keys(detail).length ? (
    <Card sx={{ maxWidth: 500 }} className="my-2">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={detail.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={detail.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="overflow-y-auto flex justify-between flex-wrap p-0"
        >
          <span> Ready at :{detail.readyInMinutes} Minutes</span>
          <span>{detail.vegetarian ? "Vegeterian" : "Not Vegeterian"} </span>
        </Typography>
        <div className="text-xl text-center">
          {" "}
          Price: {Math.ceil(detail.pricePerServing / 100)}$
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <ItemList detail={detail} expanded={expanded} />
      <Instructions detail={detail} expanded={expanded} />
    </Card>
  ) : null;
}

export default Reciep;
