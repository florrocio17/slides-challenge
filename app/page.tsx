import Image from 'next/image'
import burguer from "@/assets/burguer.svg"
import topArrow from "@/assets/top-arrow.svg"
import Photo from "@/components/Photo"
import Text from "@/components/Text"

export default function Home() {

  return (
    <div className='sm:mt-8 w-full flex'>
      <div className='justify-center'>
        <div className='absolute top-0 right-0 p-5 m-4'>
          <Image src={burguer} alt='burguer' />
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 mx-4 sm:m-8 justify-center flex-wrap'>
          <Text />
          <Photo />
        </div>
        <div className='flex justify-center'>
          <Image src={topArrow} alt='top-arrow' />
        </div>
      </div>
    </div>
  )
}