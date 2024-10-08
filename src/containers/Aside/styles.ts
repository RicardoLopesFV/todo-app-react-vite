import styled from "styled-components";

export const CategorySection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  li {
    font-size: 1rem;
    list-style: none;
  }
`

export const CategoryButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`
