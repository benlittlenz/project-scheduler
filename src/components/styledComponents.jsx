import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  overflow: hidden;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
/* border-left: ${({ borderLeft }) => borderLeft}; */

export const TagContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f7f7f7;
  padding: 0 0.2rem;
  text-transform: uppercase;
  font-family: "Roboto";
  font-size: 0.7rem;
`;
