import Image from 'next/image'
import burguer from "@/assets/burguer.svg"
import topArrow from "@/assets/top-arrow.svg"
import Photo from "@/components/Photo"
import Text from "@/components/Text"


export default function Home() {

  return (
    <div className='sm:p-4 sm:mt-8 sm:m-3'>
      <div >
        <div className='absolute top-0 right-0 p-5 m-4'>
          <Image src={burguer} alt='burguer' />
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 mx-4 sm:m-8'>
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