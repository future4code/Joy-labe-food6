import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import theme from "../../constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  Tab,
  Tabs,
  Box,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { goToSearch } from "../../route/coordinator";

import useProtectedPage from "../../hooks/useProtectedPage";

const useStyles = makeStyles({
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box>{children}</Box>}</div>;
}

function FeedPage() {
  useProtectedPage();
  const history = useHistory();
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState(0);
  const [foodCategory, setFoodCategory] = useState(0);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleFoodCategoryChange = (event, newValue) => {
    setFoodCategory(newValue);
  };
  console.log(restaurants);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header title={"FutureEats"} />

        <Paper color="primary" onClick={() => goToSearch(history)}>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Restaurante" />
        </Paper>

        <AppBar position="static" color="default">
          <Tabs
            value={foodCategory}
            onChange={handleFoodCategoryChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Todos" />
            <Tab label="Árabe" />
            <Tab label="Asiática" />
            <Tab label="Baiana" />
            <Tab label="Carnes" />
            <Tab label="Hamburguer" />
            <Tab label="Italiana" />
            <Tab label="Mexicana" />
            <Tab label="Petiscos" />
            <Tab label="Sorvetes" />
          </Tabs>
        </AppBar>
        <TabPanel value={foodCategory} index={0}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    description={restaurant.description}
                    address={restaurant.address}
                    shipping={restaurant.shipping}
                    deliveryTime={restaurant.deliveryTime}
                    logoUrl={restaurant.logoUrl}
                    category={restaurant.category}
                  />
                );
              })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={1}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Árabe";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={2}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Asiática";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={3}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Baiana";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={4}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Carnes";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={5}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Hamburguer";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={6}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Italiana";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={7}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Mexicana";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={8}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Petiscos";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel value={foodCategory} index={9}>
          <div className={classes.listContainer}>
            {restaurants &&
              restaurants
                .filter((restaurant) => {
                  return restaurant.category === "Sorvetes";
                })
                .map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default FeedPage;
