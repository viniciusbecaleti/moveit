import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '@/components/CompletedChallenges'
import { Countdown } from '@/components/Countdown'
import { ExperienceBar } from '@/components/ExperienceBar'
import { Profile } from '@/components/Profile'
import { ChallengeBox } from '@/components/ChallengeBox'
import { CountdownProvider } from '@/contexts/CountdownContext'
import { ChallengesProvider } from '@/contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  completedChallenges: number
}

export default function Home({
  level,
  currentExperience,
  completedChallenges,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
      <Head>
        <title>Move.it</title>
      </Head>

      <div className="mx-auto flex min-h-screen max-w-[600px] flex-col px-4 py-6 lg:max-w-[992px]">
        <ExperienceBar />

        <CountdownProvider>
          <main className="mt-8 grid flex-1 content-center gap-x-24 gap-y-8 lg:grid-cols-2">
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </main>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, completedChallenges } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
    },
  }
}
