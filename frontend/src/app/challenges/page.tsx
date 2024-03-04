'use client'
import React from 'react'
import GameModes from '@/components/GameModes/GameModes'


const ChallengesPage = () => {
  return (
    <main className='h-full relative flex justify-center items-center'>
      <GameModes title='test' />
      <GameModes title="" />
      <GameModes title="" />
    </main>
  );
}

export default ChallengesPage