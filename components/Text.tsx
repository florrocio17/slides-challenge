import Button from '@/components/Button'

export default function Text() {
    return (
        <div className='sm:w-1/2 flex flex-col mt-20 sm:p-12 m-3 text-center sm:text-start'>
            <h4 className='tracking-widest'>ABOUT — PERSONAL</h4>
            <h1 className='sm:text-6xl text-2xl mt-3'>¡Hello! <strong>I’m Angela Smith</strong></h1>
            <p className='mt-8 mr-4 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button />
        </div>
    )
}