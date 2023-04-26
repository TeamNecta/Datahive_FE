import { Inter } from 'next/font/google'
import FeatureCard from '@/components/FeatureCard'
import { useRouter } from 'next/router';
import Image from 'next/image' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`container p-4 mx-auto min-h-screen ${inter.className} bg-gradient-to-r from-purple-600 to-blue-600`}

    >
      <div className='h-screen flex flex-col items-center justify-center gap-4'>


        <h1 className='text-6xl font-extrabold p-4'>Welcome to DataHive. <br /><span className="flex flex-row gap-4">Start by uploading your file <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 animate-bounce">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg></span></h1>

        <div className="flex flex-row gap-4 items-center border-4 border-primary-focus px-4 py-2 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
          </svg>
          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={(e) => {
              if (e.target.files) {
                const formData = new FormData();
                formData.append('file', e.target.files[0]);
                fetch('/api/upload', {
                  method: 'POST',
                  body: formData
                }).then(res => res.json()).then(data => {
                  {/* Store in local storage */ }
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
      </div>
      <div className='grid place-items-center grid-cols-3 gap-4 p-4'>
        <FeatureCard title="Data Cleaning" description="Clean your data with our data cleaning tool" icon={
          <Image src="/datacleaning.svg" alt="Data Cleaning" height={250} width={250} />

        } button="Clean Data" />
        <FeatureCard title="Data Visualization" description="Visualize your data with our data visualization tool" icon={
          <Image src="/datavisualization.svg" alt="Data Visualization" height={250} width={250} />
        } button="Visualize Data" />
        <FeatureCard title="Data Analysis" description="Analyze your data with our data analysis tool" icon={
          <Image src="/dataanalysis.svg" alt="Data Analysis" height={250} width={250} />
        } button="Analyze Data" />
      </div>
    </main>
  )
}
