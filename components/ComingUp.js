import {comingupFeatures} from '../data/material'

const Comingup = () => {
    return (
        <section name="coming up" className="flex flex-col justify-center items-center my-20">
            <span className="text-center text-3xl font-bold lg:text-5xl">What&apos;s coming up</span>
            <div className="flex flex-col justify-center items-center my-8 lg:flex-row">
                {comingupFeatures.map(feature => {
                    return (
                        <div key={feature.id} className="w-64 max-w-xl min-w-[300px] h-80 flex flex-col justify-center items-center text-center border-2 border-red-500 rounded-md p-4 m-4 lg:h-96">
                            <div className="text-8xl">
                                <iconify-icon icon={feature.iconUrl} style={{color: '#c02135'}}/>
                            </div>
                            <span className="text-xl font-bold">{feature.label}</span>
                            <p className="mt-2 opacity-90">{feature.des}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Comingup