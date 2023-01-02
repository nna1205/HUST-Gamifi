const NewsLetter = () => {
    return (
        <section name="message" className="w-screen bg-red-500 flex flex-col justify-center items-center mt-20">
            <div className="w-full text-center flex flex-col justify-center items-center p-6 py-12 lg:w-2/5">
                <span className="text-3xl font-bold mb-10 lg:text-5xl">Theo dõi chúng mình để trải nghiệm ứng dụng</span>
                <div name="email input" className="flex justify-between items-center bg-white border-2 border-red-500 rounded-xl w-full max-w-xl px-8 py-4 mb-6 lg:my-10">
                    <input 
                        placeholder="Nhập email của bạn"
                        className="w-full mr-6 text-black bg-transparent focus:outline-none focus:border-b focus:border-b-red-500 lg:mr-10" 
                    />
                    <button className="text-2xl flex justify-center items-center">
                        <iconify-icon icon="carbon:send-filled" style={{color: '#c02135'}}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter