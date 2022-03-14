import React, { useEffect } from "react";
import Logo from "../../img/logo-future-eats-invert@2x.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../../route/coordinator";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 640px;
  background-color: white;
`;

function LoadingPage() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(InitialPage, 2000);
  }, []);

  function InitialPage() {
    goToFeed(history);
  }

  return (
    <LoadingContainer>
      <img src={Logo} alt="logo" />
    </LoadingContainer>
  );
}

export default LoadingPage;
