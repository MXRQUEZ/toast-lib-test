import React, {useState} from 'react';
import {ToastPosition, ToastProps, ToastService} from 'react-toasts-ui-lib';
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledButton = styled.button`
  flex: 1 0 21%;
  padding: 10px;
  font-size: 18px;
`;

const App = () => {
  const toastService = new ToastService("toast-root");
  const toastProps: ToastProps = {
    title: "Test",
    description: "Test toast description",
    toastRole: "info",
    animation: "bounce",
    color: "white",
    backgroundColor: "black",
    closeTimerSec: 5,
    position: "bottom-right"
  }

  const [render, setRender] = useState<number>(0);
  const handleClickChangePosition = (event: React.MouseEvent<HTMLButtonElement>) => {
    toastProps.position = event.currentTarget.name as ToastPosition;
    toastService.addToast(toastProps);
    setRender(render + 1)
  }

  return (
    <div className="App">
      <StyledDiv>
        <StyledButton
          name="bottom-right"
          onClick={handleClickChangePosition}>
          bottom-right
        </StyledButton>
        <StyledButton
          name="top-right"
          onClick={handleClickChangePosition}>
          top-right
        </StyledButton>
        <StyledButton
          name="top-left"
          onClick={handleClickChangePosition}>
          top-left
        </StyledButton>
        <StyledButton
          name="bottom-left"
          onClick={handleClickChangePosition}>
          bottom-left
        </StyledButton>
      </StyledDiv>
      {toastService.getToasts()?.map((toast) => toast)}
    </div>
  );
}

export default App;
