import { useContext } from 'react'
import { ChallengesContext } from '@/contexts/ChallengesContext'

export function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext)

  return (
    <div className="my-14 flex items-center justify-between border-b-2 border-b-[#d7d8da] pb-4 font-medium">
      <span className="text-xl">Desafios completos</span>
      <span className="text-2xl">{completedChallenges}</span>
    </div>
  )
}
