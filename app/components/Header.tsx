'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' className='logo'>
          <Image src='/logo.png' width={40} height={40} alt='tree' />
          DevOasis
        </Link>
      </div>
    </header>
  )
}
