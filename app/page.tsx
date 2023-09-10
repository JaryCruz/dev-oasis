'use client'
import { useEffect, useState } from 'react'
import FilterJobs from './components/FilterJobs'
import Jobs, { JobInfoType } from './components/Jobs'

export default function HomePage() {
  const [jobs, setJobs] = useState<JobInfoType[] | null>(null)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('https://dev-oasis.netlify.app/api/jobs')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchJobs()
  }, [])

  function searchJobs(data: JobInfoType[]) {
    return setJobs(data)
  }

  return (
    <main>
      <FilterJobs searchJobs={searchJobs} />
      {jobs && <Jobs jobs={jobs} />}
    </main>
  )
}
