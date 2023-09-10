'use client'
import { FormEvent, useState } from 'react'
import { JobInfoType } from './Jobs'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'

type FilterJobsProps = {
  searchJobs: (data: JobInfoType[]) => void
}

export default function FilterJobs({ searchJobs }: FilterJobsProps) {
  const [position, setPosition] = useState('')
  const [location, setLocation] = useState('')
  const [fullTimeOnly, setFullTimeOnly] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (position == null && location == null && fullTimeOnly === false) return
    const response = await fetch('http://localhost:3000/api/jobs')
    const data = await response.json()

    const filteredJobs = data.filter((job: JobInfoType) => {
      const positionMatch = job.position
        .toLowerCase()
        .includes(position.toLowerCase())

      const locationMatch = job.location
        .toLowerCase()
        .includes(location.toLowerCase())

      const fullTimeMatch =
        !fullTimeOnly || job.contract.toLowerCase() === 'full time'

      return positionMatch && locationMatch && fullTimeMatch
    })

    searchJobs(filteredJobs)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <FaMagnifyingGlass />
          <input
            type='text'
            placeholder='Search for a job...'
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <FaLocationDot />
          <input
            type='text'
            placeholder='Filter by location...'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='checkbox'
            name='fullTime'
            id='fullTime'
            onChange={e => setFullTimeOnly(e.target.checked)}
            checked={fullTimeOnly}
          />
          <label htmlFor='fullTime'>Full Time Only</label>
          <button className='btn-primary'>Search</button>
        </div>
      </form>
    </div>
  )
}
