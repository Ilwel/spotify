import styled from "styled-components";

const Line = styled.div`

  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: dashed 0.2rem var(--color-1);
  animation: gradient infinite alternate 2s;

`

export default Line;