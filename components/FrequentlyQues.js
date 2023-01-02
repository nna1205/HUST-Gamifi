import {frequentlyQs} from '../data/material'

const FrequentlyQues = () => {
    return (
        <section name="coming up" className="flex flex-col justify-center items-center my-20">
            <span className="text-center text-3xl font-bold lg:text-5xl">Frequently asked questions</span>
            <div className="flex flex-col justify-center my-8 border-2 border-gray-800 rounded-xl lg:px-10">
                {frequentlyQs.map(ques => {
                    return (
                        <div 
                            key={ques.id} 
                            className="p-4 my-2 border-y border-gray-800 first:border-y-0 last:border-y-0"
                        >
                            <span className="text-red-500 text-xl font-bold lg:text-2xl">{ques.label}</span>
                            <p className="mt-2 opacity-90">{ques.content}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FrequentlyQues