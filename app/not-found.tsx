import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='container not-found'>
      <h1>Page Not Found</h1>
      <Link href='/'>Click Here To Return To The Homepage</Link>
    </div>
  )
}
