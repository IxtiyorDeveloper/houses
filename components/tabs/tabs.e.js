import styled from "styled-components"

export const Wrapper = styled.div``

export const Icon = styled.div`
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  display: inline-block;

  & > span {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.6;
    transform: scale(1.05);
  }
`
export const RelativeParent = styled.span`
   position: relative;
`