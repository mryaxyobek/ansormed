import React from 'react'

const cta = () => {
    return (
        <section className="bg-[#0EB4C1]">
            <div className="flex flex-col items-center justify-center container py-16">
                <h2 className="text-4xl text-white font-bold max-w-[500px] mb-10">Qabulga ro’yxatdan o’ting</h2>
                <div>
                    <a href="#" className="inline-block py-3 px-6 rounded-lg text-white bg-transparent border-[2px] mr-10">Qo’ng’iroq qilish</a>
                    <a href="#" className="inline-block py-3 px-6 rounded-lg text-white bg-transparent border-[2px]">Telegramdan yozish</a>
                </div>
            </div>
        </section>
    )
}

export default cta