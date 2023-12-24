'use client'
import React from 'react'
import { StyledChallengeCard, StyledChallengesWrapper } from './styles'
import GameModes from '@/components/gameModes/gameModes'

type Props = {}

const ChallengesPage = (props: Props) => {
  return (
    <StyledChallengesWrapper>
        <GameModes/>
        <GameModes/>
        <GameModes/>
    </StyledChallengesWrapper>
  )
}

export default ChallengesPage