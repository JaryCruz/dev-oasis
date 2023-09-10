import Image from 'next/image'
import Link from 'next/link'

export type JobInfoType = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}

export default function Jobs({ jobs }: { jobs: JobInfoType[] }) {
  if (jobs.length < 1) {
    return (
      <h2 className='no-jobs'>No Jobs Were Found, Please Check Again Later</h2>
    )
  }

  return (
    <div className='container jobs-container'>
      {jobs.map((job: JobInfoType) => (
        <div className='job-card' key={job.id}>
          <Image
            width={40}
            height={40}
            src={job.logo}
            alt=''
            style={{ backgroundColor: job.logoBackground }}
          />
          <p>
            {job.postedAt} - {job.contract}
          </p>
          <Link href={`/job/${job.id}`}>{job.position}</Link>
          <p>{job.company}</p>
          <h3 className='location'>{job.location}</h3>
        </div>
      ))}
    </div>
  )
}
