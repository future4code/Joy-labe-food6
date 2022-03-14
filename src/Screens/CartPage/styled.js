import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AdressInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 76px;
  background-color: #eeeeee;
`;

export const DeliveryAdress = styled.p`
  display: flex;
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: grey;
`;

export const AdressDetail = styled.p`
  display: flex;
  width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const CartCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const ShippingDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    display: flex;
    margin-right: 16px;
  }
`;

export const SubtotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubtotalTitle = styled.p`
  width: 164px;
  height: 18px;
  margin: 16px 0 24px 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const SubtotalValue = styled.p`
  width: 164px;
  height: 18px;
  margin: 14px 16px 26px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
`;

export const PaymentMethodDiv = styled.div`
  display: flex;
  position: relative;
  height: 290px;
  flex-direction: column;
  padding-right: 16px;
  padding-left: 16px;
`;

export const PaymentMethodTitle = styled.p`
  width: 328px;
  height: 18px;
  margin: 24px 0px 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const Hr = styled.hr`
  width: 328px;
  border: solid 1px #000000;
`;

export const ConfirmPayButton = styled.button`
  width: 328px;
  height: 42px;
  border: none;
  font-weight: bold;
  background-color: rgba(92, 182, 70, 0.5);
`;
