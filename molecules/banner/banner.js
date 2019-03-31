import React, { Component } from 'react';
import styled from "styled-components"
import {StyledBanner} from "./banner.styles"

const StyledP = styled.p`
  font-size: 16px;
`

class Banner extends Component {
  render() {
    return (
      <StyledBanner>
        <StyledP>
          This is a paragraph
        </StyledP>
        <StyledP>
          This is another paragraph
        </StyledP>
      </StyledBanner>
    );
  }
}

export default Banner;
