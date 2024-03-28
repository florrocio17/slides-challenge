import Image from 'next/image'
import burguer from "@/assets/burguer.svg"
import topArrow from "@/assets/top-arrow.svg"
import Photo from "@/components/Photo"
import Text from "@/components/Text"
import Button from '@/components/Button'

export default function Home() {

  return (
    <div className='sm:mt-8 w-full flex'>
      <div className='justify-center'>
        <div className='absolute top-0 right-0 p-5 m-4'>
          <Image src={burguer} alt='burguer' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2  items-center mx- sm:m-10 justify-center'>
          <Text />
          <Photo />
        </div>
        <div><Button /></div>
          
        <div className='flex justify-center sm:mb-4 sm:mt-10'>
          <Image src={topArrow} alt='top-arrow' />
        </div>
      </div>
    </div>
  )
}