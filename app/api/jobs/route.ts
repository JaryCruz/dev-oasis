import { NextResponse } from 'next/server'
import jobs from './jobs.json'

export async function GET(request: Request) {
  return NextResponse.json(jobs)
}
