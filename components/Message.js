const Message = () => {
    return (
        <section name="message" className="flex flex-col justify-center items-center my-20">
            <div className="w-full flex flex-col justify-center items-center bg-red-500 rounded-xl p-6 lg:w-4/5">
                <div className="text-center mb-10">
                    <span className="text-3xl font-bold lg:text-5xl">Để lại lời nhắn giúp chúng mình hoàn thiện sản phẩm</span>
                    <p className="mt-2 opacity-80 lg:mt-4">
                        We’re building the best place to learn math and science. In the process, we would be happy to receive a lot of love from our users
                    </p>
                </div>
                
                <div className="w-full h-80 mb-4 border-2 bg-white rounded-xl lg:w-5/6 lg:my-4"></div>
            </div>
        </section>
    )
}

export default Message