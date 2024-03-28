import Image from 'next/image'
import Arrow from '@/assets/Arrow.svg'

export default function Button() {
    return (
        <>
            <div className='bg-black text-white flex flex-row mt-8 rounded-md pr-3 py-1 m-3 justify-center sm:w-40  sm:ml-24
             sm:-mt-32 sm:mb-14'>
                <p className='p-4'>Get started</p>  <Image src={Arrow} alt='arrow' />
            </div>
        </>
    )
}