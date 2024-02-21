'use client'
import React from 'react'
import { StyledChallengesWrapper } from './styles'
import GameModes from '@/components/gameModes/gameModes'


const ChallengesPage = () => {
  return (
    <StyledChallengesWrapper>
      <GameModes title='test' />
      <GameModes title="" />
      <GameModes title="" />
    </StyledChallengesWrapper>
  );
}

export default ChallengesPage