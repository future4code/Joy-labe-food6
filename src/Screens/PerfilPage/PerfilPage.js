import React, { useEffect, useState } from "react";
import {
  ProfileContainer, ProfileDetailContainer, RowFlexContainer, AddressDetailContainer, OrderHistoryContainer
} from "./Styles";
import CreateIcon from "@material-ui/icons/Create";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { goToEditProfile } from "../../route/coordinator";
import { goToEditAddress } from "../../route/coordinator";
import { useHistory } from "react-router-dom";

function PerfilPage() {
  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  const getOrdersHistory = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setOrderHistory(response.data.order);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  return (
    <ProfileContainer>
      <Header title={"Meu Perfil"} />

      <ProfileDetailContainer>
        <RowFlexContainer>
          <p>{profile.name}</p>
          <CreateIcon onClick={() => goToEditProfile(history)} />
        </RowFlexContainer>
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </ProfileDetailContainer>

      <AddressDetailContainer>
        <RowFlexContainer>
          <p>Endereço Cadastrado</p>
          <CreateIcon onClick={() => goToEditAddress(history)} />
        </RowFlexContainer>
        <p>{profile.address}</p>
      </AddressDetailContainer>

      <OrderHistoryContainer>
        <p>Histórico de pedidos</p>
      </OrderHistoryContainer>

      <Footer />
    </ProfileContainer>
  );
}

export default PerfilPage;
