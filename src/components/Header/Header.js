import React from "react";
import { useHistory } from "react-router-dom";
import { MainDiv, HeaderTitleDiv, StyelBackButton } from "./Styled";

function Header({ showBackButton, title }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <HeaderTitleDiv>
        {showBackButton && <StyelBackButton onClick={goBack} />}
        {title}
      </HeaderTitleDiv>
    </MainDiv>
  );
}

export default Header;