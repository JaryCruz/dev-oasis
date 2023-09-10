import { JobInfoType } from '@/app/components/Jobs'
import Image from 'next/image'

type JobPageProps = {
  params: {
    id: string
  }
}

async function getJobs() {
  const response = await fetch('https://dev-oasis.netlify.app/api/jobs')
  const data = await response.json()
  return data
}

export default async function JobPage({ params: { id } }: JobPageProps) {
  const data = await getJobs()
  const filteredJob = data.find((job: JobInfoType) => job.id === Number(id))

  return (
    <div className='container'>
      <div className='application-company'>
        <Image
          src={filteredJob.logo}
          alt=''
          width={100}
          height={100}
          style={{ backgroundColor: filteredJob.logoBackground }}
        />
        <div className='application-website'>
          <div>
            <h3>{filteredJob.company}</h3>
            <p>{filteredJob.company}.com</p>
          </div>
          <button className='btn-secondary'>Company Site</button>
        </div>
      </div>

      <div className='application-body'>
        <div className='application-header'>
          <p>
            {filteredJob.postedAt} - {filteredJob.contract}
          </p>
          <div className='application-title'>
            <div>
              <h1>{filteredJob.position}</h1>
              <h3 className='location'>{filteredJob.location}</h3>
            </div>
            <button className='btn-primary'>Apply Now</button>
          </div>
        </div>
        <p>{filteredJob.description}</p>
        <h2>Requirements</h2>
        <p>{filteredJob.requirements.content}</p>
        <ul>
          {filteredJob.requirements.items.map(
            (item: string[], index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
        <h2>What You Will Do</h2>
        <p>{filteredJob.role.content}</p>
        <ul>
          {filteredJob.role.items.map((item: string[], index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
