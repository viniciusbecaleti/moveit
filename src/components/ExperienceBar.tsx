import { useContext } from 'react'
import { ChallengesContext } from '@/contexts/ChallengesContext'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext)

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className="flex items-center">
      <span className="text-sm font-medium">{currentExperience} xp</span>
      <div className="relative mx-5 h-1 flex-1 rounded-[4px] bg-gray-line">
        <div
          style={{ width: `${percentToNextLevel}%` }}
          className="h-full rounded-[4px] bg-green transition-all"
        />
        {/* <span
          style={{ left: `${percentToNextLevel}%` }}
          className={`absolute top-2 -translate-x-1/2 truncate whitespace-nowrap text-sm font-medium`}
        >
          {currentExperience} xp
        </span> */}
      </div>
      <span className="text-sm font-medium">{experienceToNextLevel} xp</span>
    </header>
  )
}
