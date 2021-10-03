import styled from "styled-components";
import Card from "./Card";

const Modal = styled.div`

  position: fixed;
  background-color: rgba(0,0,0,0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card}{

    background-color: var(--color-2);
    height: 80%;
    width: 40%;
    animation: apear 1s;
    display: flex;
    flex-direction: column;
    padding: 4rem;

    & .title{

      margin-top: 4rem;

    }

    img{

      position: absolute;
      height: 10rem;
      width: 10rem;
      top: 30rem;
      right: 50rem;
      border: dashed 0.2rem var(--color-1);
    
    }

    a{

      all:unset;
      cursor: pointer;

    }

    p{

      margin-top: 5rem;
      font-size: 1.4rem;
      font-weight: 600;
      font-style: italic;
      padding: 4rem;

    }

    & .close{

      position: absolute;
      top: 10rem;
      right: 48rem;
      cursor: pointer;

    }

    ul{
      all: unset;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 4rem;
      margin-top: 10rem;
      li{

        display: flex;
        h1{

          font-size: 1.4rem;
          :hover{

            color: var(--color-3);

          }

        }

      }

    }

  }

`

export default Modal;