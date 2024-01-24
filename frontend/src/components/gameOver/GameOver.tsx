import { GameOverComponent } from '@/interfaces'
import React from 'react'
import { StyledGameOverWrapper, StyledLostText, StyledPlayAgain } from './styles'



const GameOver = ({lostBy,newGame,finalScore}: GameOverComponent) => {
  
  return (
    <StyledGameOverWrapper>
      <StyledLostText>You lost because you ran out of {lostBy}</StyledLostText>
      <StyledLostText>Final Score: {finalScore}</StyledLostText>
      <StyledPlayAgain onClick={newGame}>Play Again!</StyledPlayAgain>
    </StyledGameOverWrapper>
  )
}

export default GameOver