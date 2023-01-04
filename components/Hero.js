import Link from 'next/link';
import Image from 'next/image'
import {useRef} from 'react';
import useIntersection from '../hooks/useIntersection';

const Hero = () => {
    const ref = useRef();
    const inViewport = useIntersection(ref, '50px');

    return (
        <section name="hero" className="min-h-screen flex flex-col justify-center items-center lg:flex-row">
            <div ref={ref} className={`${inViewport ? 'animate__fadeInUp' : ''} w-full min-w-[300px] border-2 border-red-500 rounded-md p-8 mx-2 order-2 lg:order-first lg:w-1/2`}>
                <div className="text-3xl font-bold lg:text-5xl">
                    <span className="mr-4">First platform for HUST students</span><br/>
                    <span className="text-red-500">Gamification Learning</span>
                </div>
                <div className="my-4 opacity-90">
                <p>
                    For lifelong learners of any age, Thinky replaces lecture videos with hands-on, interactive problem solving. 
                    It’s a better way to learn.
                </p>
                </div>
                <div 
                    name="login"
                    className="bg-red-500 rounded-md text-center px-8 py-2 mt-8 max-w-xs shadow-md hover:scale-105 hover:opacity-90"
                >
                <Link href="/">
                    <button className="font-medium">Bắt đầu</button>
                </Link>
                </div>
            </div>

            <div className="w-full h-60 flex justify-center items-center lg:w-1/2 lg:h-96">
                <Image width={400} height={400} src="/hust student.png" alt="hust student" title="hust student"/>
            </div>
        </section>
    )
}

export default Hero;