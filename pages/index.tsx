import { Inter } from 'next/font/google'
import FeatureCard from '@/components/FeatureCard'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`container mx-auto min-h-screen ${inter.className} bg-gradient-to-r from-purple-600 to-blue-600`}

    >
      <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-6xl font-extrabold p-4'>Welcome to DataHive. Start by uploading your file</h1>
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
        onChange={(e) => {
          if (e.target.files) {
            const formData = new FormData();
            formData.append('file', e.target.files[0]);          
            fetch('/api/upload', {
              method: 'POST',
              body: formData
            }).then(res => res.json()).then(data => {
              {/* Store in local storage */}
              localStorage.setItem('dataframe', JSON.stringify(data));
              router.push('/df');
            }).catch(err => {
              console.log(err)
            });
          } else {
            alert('No file selected');
          }
        }} />
      </div>
      <div className='grid place-items-center grid-cols-3 gap-4 p-4'>
        <FeatureCard title="Data Cleaning" description="Clean your data with our data cleaning tool" icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>

        } button="Clean Data" />
        <FeatureCard title="Data Visualization" description="Visualize your data with our data visualization tool" icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        } button="Visualize Data" />
        <FeatureCard title="Data Analysis" description="Analyze your data with our data analysis tool" icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        } button="Analyze Data" />
      </div>
    </main>
  )
}
