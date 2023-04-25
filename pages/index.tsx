import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`container mx-auto min-h-screen ${inter.className} bg-gradient-to-r from-purple-600 to-blue-600`}

    >
      <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-6xl font-extrabold p-4'>Welcome to DataHive. Start by uploading your file</h1>
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
      </div>
      <div className='grid place-items-center grid-cols-3 gap-4 p-4'>
        <div className='p-4 h-36 w-full max-w-36 border-2 border-secondary rounded-lg flex flex-col items-center justify-center bg-blue-600'>
          <h1>
            Data Cleaning
          </h1>
          <p></p>
        </div>
        <div className='p-4 h-36 w-full max-w-36 border-2 border-secondary rounded-lg flex flex-col items-center justify-center bg-blue-600'>
          <h1>
            Data Visualization
          </h1>
        </div>
        <div className='p-4 h-36 w-full max-w-36 border-2 border-secondary rounded-lg flex flex-col items-center justify-center bg-blue-600'>
          <h1>
            Data Analysation
          </h1>
        </div>
      </div>
    </main>
  )
}
