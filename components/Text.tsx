import Button from '@/components/Button'
export default function Text() {
    return (
        <div className='flex flex-col mt-20 sm:p-12 m-3 text-center sm:text-start'>
            <h4 className='tracking-widest'>ABOUT — PERSONAL</h4>
            <h1 className='sm:text-6xl text-2xl mt-3'>¡Hello! <strong>I’m Angela Smith</strong></h1>
            <p className='mt-8 mr-4 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                In vero fugiat pariatur possimus asperiores at labore sunt, deserunt minus incidunt
                libero accusantium, quidem ex magni ut recusandae aliquid veritatis quisquam,
                Non unde quis iusto laudantium minus a explicabo neque quam vel, error soluta.</p>

            <Button />
        </div>
    )
}