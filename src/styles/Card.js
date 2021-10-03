import styled from "styled-components";

const Card = styled.div`

  color: var(--color-1);
  box-shadow: 0.4rem 0.4rem 1.1rem 0.3rem rgba(90,125,255,0.32);
  height: 8rem;
  width: 8rem;
  text-align: center;

  button{

    all: unset;
    background-color: var(--color-2);
    color: var(--color-1);
    border: dashed 0.2rem var(--color-1);
    cursor: pointer;
    padding: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
    animation: gradient infinite alternate 2s;
    transition: 0.5s;

    :hover{

      transform: scale(1.1);

    }

  }

`

export default Card;