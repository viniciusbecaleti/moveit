import { useContext } from 'react'
import { ChallengesContext } from '@/contexts/ChallengesContext'
import Image from 'next/image'
import { CountdownContext } from '@/contexts/CountdownContext'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className="flex h-full flex-col items-center justify-center rounded bg-white px-14 py-8 shadow-[0_0_60px_rgba(0,0,0,0.05)]">
      {activeChallenge ? (
        <div className="flex h-full flex-col">
          <header className="border-b-2 border-b-gray-line pb-6 text-center text-xl font-semibold text-blue">
            Ganhe {activeChallenge.amount} xp
          </header>

          <main className="my-9 flex flex-1 flex-col items-center justify-center text-center">
            <Image
              src={`icons/${activeChallenge.type}.svg`}
              alt=""
              width={140}
              height={112}
            />
            <strong className="mb-4 mt-6 text-3xl font-semibold text-title">
              Novo desafio
            </strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded bg-red font-semibold text-white transition-all hover:brightness-95"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center rounded bg-green font-semibold text-white transition-all hover:brightness-95"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <strong className="text-center text-2xl font-medium">
            Finalize um ciclo <br /> para receber desafios a serem completados
          </strong>
          <p className="flex items-center gap-4">
            <Image src="icons/level-up.svg" alt="" width={32} height={44} />
            Complete-os e ganhe <br /> experiência e avance de leve.
          </p>
        </div>
      )}
    </div>
  )
}
