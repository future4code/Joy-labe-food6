import React, { useContext, useEffect, useState } from "react";
import {
  MainDiv,
  ApplicationDiv,
  AdressInfoDiv,
  DeliveryAdress,
  AdressDetail,
  CartCardListContainer,
  SubtotalDiv,
  SubtotalTitle,
  SubtotalValue,
  ShippingDiv,
  PaymentMethodDiv,
  PaymentMethodTitle,
  Hr,
  ConfirmPayButton,
} from "./styled";
import Header from "../../components/Header/Header";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import GlobalStateContext from "../../global/GlobalStateContext";
import DishCard from "../../components/DishCard/DishCard";

function CartPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const [products, setProducts] = useState([]);

  console.log("na pagina de carrinho", states.cart)
  
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = () => {
    const body = {
      products: [
        {
          id: "CnKdjU6CyKakQDGHzNln",
          quantity: 10,
        },
        {
          quantity: 1,
          id: "KJqMl2DxeShkSBevKVre",
        },
      ],
      paymentMethod: "creditcard",
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1/order",
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setProducts(response.data.restaurant.products);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <MainDiv>
      <ApplicationDiv>
        <Header title={"Meu carrinho"} showBackButton />
        <AdressInfoDiv>
          <DeliveryAdress>Endereço de entrega</DeliveryAdress>
          <AdressDetail>Rua Labenu, 100</AdressDetail>
        </AdressInfoDiv>
        <CartCardListContainer>{states.cart && states.cart.map((item) => {
          console.log("item no cart", item.newItem)
          return (
            <DishCard
              key={item.newItem.id}
              id={item.newItem.id}
              name={item.newItem.name}
              description={item.newItem.description}
              photoUrl={item.newItem.photoUrl}
              category={item.newItem.category}
              price={item.newItem.price}
              restaurantId={item.newItem.id}
            />
          )
        })}</CartCardListContainer>
        <ShippingDiv>
          <p>Frete R$0,00</p>
        </ShippingDiv>
        <SubtotalDiv>
          <SubtotalTitle>SUBTOTAL</SubtotalTitle>
          <SubtotalValue> R$00,00 </SubtotalValue>
        </SubtotalDiv>
        <PaymentMethodDiv>
          <PaymentMethodTitle>Forma de Pagamento</PaymentMethodTitle>
          <Hr />
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                name="money"
              />
            }
            label="Dinheiro"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                name="creditCard"
              />
            }
            label="Cartão de crédito"
          />
          <ConfirmPayButton>Confirmar</ConfirmPayButton>
        </PaymentMethodDiv>
      </ApplicationDiv>
      <Footer />
    </MainDiv>
  );
}

export default CartPage;