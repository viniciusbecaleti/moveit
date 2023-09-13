import { useContext } from 'react'
import Image from 'next/image'
import { CountdownContext } from '@/contexts/CountdownContext'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <div className="flex items-center font-rajdhani font-semibold text-title">
        <div className="lead flex flex-1 items-center justify-evenly rounded bg-white text-center text-9xl leading-[1.1] shadow-[0_0_60px_rgba(0,0,0,0.05)]">
          <span className="flex-1 border-r-[1px] border-r-[#f0f1f3]">
            {minuteLeft}
          </span>
          <span className="flex-1 border-l-[1px] border-l-[#f0f1f3]">
            {minuteRight}
          </span>
        </div>
        <span className="mx-2 text-8xl">:</span>
        <div className="lead flex flex-1 items-center justify-evenly rounded bg-white text-center text-9xl leading-[1.1] shadow-[0_0_60px_rgba(0,0,0,0.05)]">
          <span className="flex-1 border-r-[1px] border-r-[#f0f1f3]">
            {secondLeft}
          </span>
          <span className="flex-1 border-l-[1px] border-l-[#f0f1f3]">
            {secondRight}
          </span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type="button"
          className="mt-8 flex h-20 w-full items-center justify-center gap-4 rounded border-b-4 border-b-green bg-white text-xl font-semibold text-text transition-colors disabled:cursor-not-allowed"
          onClick={resetCountdown}
        >
          Ciclo encerrado
          <Image src="icons/check.svg" alt="" width={20} height={20} />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="mt-8 flex h-20 w-full items-center justify-center gap-4 rounded bg-white text-xl font-semibold text-text transition-colors"
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <Image src="icons/x.svg" alt="" width={14} height={14} />
            </button>
          ) : (
            <button
              type="button"
              className="mt-8 flex h-20 w-full items-center justify-center gap-4 rounded bg-blue text-xl font-semibold text-white transition-colors hover:bg-blue-dark"
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <Image src="icons/play.svg" alt="" width={11} height={14} />
            </button>
          )}
        </>
      )}
    </>
  )
}
