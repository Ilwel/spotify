import styled from "styled-components";
import Card from "../../styles/Card";

const LayoutPlaylists = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem;

  ${Card}{
    
    height: 30rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transition: 1s;

    img{

      opacity: 0.2;
      height: 25rem;
      position: absolute;
      width: 25rem;
      filter: grayscale(100%);

    }

    p{

      font-size: 1.4rem;
      font-weight: 600;

    }

    span{
      
      background-color: var(--color-1);
      color: var(--color-3);
      font-weight: bold;
      padding: 1rem;

    }

    :hover{

      cursor: pointer;
      transform: scale(1.2);

      img{

        filter: none;

      }

    }

  }

`

export default LayoutPlaylists;