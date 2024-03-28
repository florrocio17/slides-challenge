import Image from 'next/image'
import profilePic from "@/assets/picture.png"


export default function Photo() {
    return (
        < >
            <Image src={profilePic} alt="Picture of the author" priority />
        </>
    )
}   