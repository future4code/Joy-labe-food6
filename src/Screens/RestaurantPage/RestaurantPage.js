import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import DishCard from "../../components/DishCard/DishCard";
import Header from "../../components/Header/Header";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detailCardContainer: {
    width: 328,
    marginTop: 8,
  },
  image: {
    height: 120,
  },
  middleContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function RestaurantPage() {
  const params = useParams();
  const classes = useStyles();
  const { states, setters } = useContext(GlobalStateContext);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setters.setRestaurantDetail(response.data.restaurant)
      })
      .catch((error) => {
        console.error(error.message)
        alert("Erro ao requisitar os detalhes")
      });
  };

  const productsArray = states.restaurantDetail.products;
  
  return (
    <div className={classes.mainContainer}>
      <Header title={"Restaurante"} showBackButton />
      <div className={classes.detailCardContainer}>
        <Card>
          <CardMedia
            className={classes.image}
            image={states.restaurantDetail.logoUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="body1">
              {states.restaurantDetail.name}
            </Typography>
            <div className={classes.middleContainer}>
              <Typography variant="body1" color="textSecondary">
                {states.restaurantDetail.deliveryTime} min
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Frete R${states.restaurantDetail.shipping},00
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary">
              {states.restaurantDetail.address}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {productsArray &&
          productsArray.map((product) => {
            return (
              <DishCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                photoUrl={product.photoUrl}
                category={product.category}
                price={product.price}
                restaurantId={params.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RestaurantPage;
