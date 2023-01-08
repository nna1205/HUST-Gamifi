import {useState} from 'react'
import axios from 'axios'

const NewsLetter = () => {
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: input,
        }
        axios.post('https://sheet.best/api/sheets/3f4f8c6a-0ecf-42c0-aa26-19950b1941ec', data).then((response)=> {
            console.log(response);
            setInput('')
        })

        // const form = input;
        // const rawResponse = await fetch('/api/submit', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(form)
        // });
        // console.log(form)
        // const content = await rawResponse.json();
    }

    return (
        <section name="message" className="w-screen bg-red-500 flex flex-col justify-center items-center mt-20">
            <div className="w-full flex flex-col justify-center items-center p-6 py-12 lg:w-3/5">
                <span className="text-3xl font-bold mb-10 lg:text-5xl">Theo dõi chúng mình để trải nghiệm ứng dụng</span> 
                <div name="email input" className="flex justify-between items-center bg-white border-2 border-red-500 rounded-xl w-full max-w-xl py-4 mb-6 lg:my-10">
                    <form className="w-full flex justify-between items-center border-2 mx-6" onSubmit={handleSubmit}>
                        <input 
                            name="Email"
                            id="email"
                            placeholder="Nhập email của bạn"
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="w-full mr-6 text-black bg-transparent focus:outline-none focus:border-b focus:border-b-red-500 lg:mr-10" 
                        />
                        <button type="submit" className="text-2xl flex justify-center items-center">
                            <iconify-icon icon="carbon:send-filled" style={{color: '#c02135'}}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter