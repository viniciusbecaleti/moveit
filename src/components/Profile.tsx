import { useContext } from 'react'
import Image from 'next/image'
import { ChallengesContext } from '@/contexts/ChallengesContext'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className="flex items-center gap-6">
      <Image
        src="https://github.com/viniciusbecaleti.png"
        alt=""
        width={80}
        height={80}
        quality={100}
        className="h-20 w-20 rounded-full"
      />
      <div>
        <strong className="block text-2xl font-semibold text-title">
          Vinicius Becaleti
        </strong>
        <span className="mt-2 flex items-center gap-2">
          <Image src="icons/level.svg" alt="" width={14} height={16} />
          Level {level}
        </span>
      </div>
    </div>
  )
}
