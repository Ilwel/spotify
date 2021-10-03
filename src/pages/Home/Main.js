import styled from "styled-components";
import Card from "../../styles/Card";

const Main = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${Card}{
    
    height: 50rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

  }

`

export default Main;