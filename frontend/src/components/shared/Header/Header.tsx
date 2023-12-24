import React from 'react'
import { StyledHeaderItem, StyledHeaderWrapper } from './styles'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeaderWrapper>
        <StyledHeaderItem>Math Practice</StyledHeaderItem>
        <StyledHeaderItem>New Challenge</StyledHeaderItem>
    </StyledHeaderWrapper>
  )
}

export default Header