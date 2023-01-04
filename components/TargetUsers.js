import {targetUsers} from '../data/material'

const TargetUsers = () => {
    return (
        <section name="target" className="flex flex-col justify-center items-center my-20 w-full min-w-[300px]">
            <div name="header" className="text-center">
                <div className="text-3xl font-bold px-2 lg:text-5xl">
                    <span className="mr-2">Features made</span>
                    <span className="text-red-500">for everyone</span>
                </div>
                <p className="px-0 mt-4 opacity-80 lg:px-20">
                    Thinky designed as the most innovative way of learning maths. It&apos;s interactive, fun and addictive. Solve a few problems everyday and watch your maths skills skyrocket!
                </p>
            </div>
            <div className="flex flex-col justify-center items-center my-8 lg:flex-row">
                {targetUsers.map(target => {
                    return (
                        <div key={target.id} className="flex flex-col justify-center items-center text-center border-2 border-red-500 rounded-md p-8 m-4 max-w-sm">
                            <div className="text-6xl">
                                <iconify-icon icon={target.iconUrl} />
                            </div>
                            <span className="text-xl font-bold lg:px-4">{target.label}</span>
                            <p className="mt-2 opacity-90 lg:px-4">{target.des}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TargetUsers