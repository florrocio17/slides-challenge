import Image from 'next/image'
import profilePic from "@/assets/picture.png"


export default function Photo() {
    return (
        <div className='image max-w-1/2'>
            <Image height={600} src={profilePic} alt="Picture of the author" priority />
        </div>
    )
}   