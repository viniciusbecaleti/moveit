import { ChallengesContext } from '@/contexts/ChallengesContext'
import Image from 'next/image'
import { useContext, useEffect } from 'react'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgb(242,243,245)]/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-md bg-white px-6 py-12 text-center shadow-sm">
        <header className="bg-[url('/icons/levelup.svg')] bg-contain bg-center bg-no-repeat text-9xl font-semibold text-blue">
          {level}
        </header>
        <strong className="text-4xl font-semibold text-title">Parabéns</strong>
        <p className="mt-1 text-xl text-text">Você alcançou um novo level.</p>
        <button
          type="button"
          className="absolute right-2 top-2"
          onClick={closeLevelUpModal}
        >
          <Image
            src="/icons/close.svg"
            alt="Fechar modal"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  )
}
