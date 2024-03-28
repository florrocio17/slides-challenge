import Image from 'next/image'
import Arrow from '@/assets/Arrow.svg'

export default function Button() {
    return (
        <>
        <div>Get started<Image src={Arrow} alt='test'/></div>
        </>
    )
}