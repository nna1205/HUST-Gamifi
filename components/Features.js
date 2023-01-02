import {featuresIntro, featuresList} from '../data/material'

const Features = () => {
    return (
        <>
            {/*Features*/}
            <section name="features" className="flex flex-col justify-center items-center my-20 bg-red-500 w-screen px-10 py-6 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <span className="text-3xl font-bold mr-4 lg:text-5xl">Learn key ideas interactively through problem solving</span>
                    <div className="">
                    <img src="/hust student.png" alt="hust student" title="hust student"/>
                    </div>
                </div>
                <div className="w-full bg-white text-black rounded-md p-4 my-4 shadow-md lg:w-1/2 lg:p-6 lg:my-0">
                    {featuresIntro.map(feature => {
                        return (
                            <div key={feature.id} className="p-4 border-y border-gray-300 first:border-y-0 last:border-y-0">
                                <span className="text-2xl font-bold drop-shadow-md">{feature.label}</span>
                                <p className="py-1 opacity-80">{feature.des}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/*Features List*/}
            <section name="features" className="flex flex-col justify-center items-center my-20 w-full min-w-[300px]">
                <div name="header" className="text-center">
                    <div className="text-3xl font-bold px-2 lg:text-5xl">
                        <span className="mr-2">Features made</span>
                        <span className="text-red-500">for everyone</span>
                    </div>
                    <p className="px-0 mt-4 opacity-80 lg:px-20">
                        Thinky designed as the most innovative way of learning maths. It's interactive, fun and addictive. Solve a few problems everyday and watch your maths skills skyrocket!
                    </p>
                </div>
                <div name="features" className="my-10">
                    {featuresList.map(feature => {
                    return (
                        <div key={feature.id} className="border-2 border-red-500 rounded-md p-6 m-6 max-w-lg ">
                        <div className="text-3xl font-bold text-center mb-4">
                            <iconify-icon icon={feature.iconUrl} style={{color: '#c02135'}}/>
                            <span className="ml-4">{feature.name}</span>
                        </div>
                        <p className="opacity-90 text-center">{feature.des}</p>
                        </div>
                    )
                    })}
                </div>
            </section>
        </>
    )
}

export default Features