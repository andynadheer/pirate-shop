import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

export default function Product() {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="large" variant="outlined" endIcon={<AddTwoToneIcon />}>
          Lägg i varukorgen
        </Button>
      </CardActions>
    </Card>
  );
}
