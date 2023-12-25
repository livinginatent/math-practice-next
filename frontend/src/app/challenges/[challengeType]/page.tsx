'use client'
import Challenge from '@/components/shared/Challenge/challenge'
import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const ChallengePage = ({params}:any) => {
 const challengeType = params.challengeType
 console.log(challengeType)
  return (
    <Challenge challengeType={challengeType}/>
  )
}

export default ChallengePage