import React from 'react'
import { servises } from '../assets/data'
import { styles } from '../assets/style'

const Main = () => {
    return (
        <main className='py-32'>
            <div className="container flex items-center flex-col">
                <h2 className="text-4xl font-bold leading-10">Xizmatlar</h2>
                <ul className="py-16 space-y-20">
                    {
                        servises.map((el) => {
                            return (
                                <li className='flex items-center'>
                                    <img width={200} height={200} src={el.img} alt={`${el.title} img`}className="mr-16" />
                                    <div>
                                        <h3 className='mb-6 text-2xl leading-7 font-bold'>{el.title}</h3>
                                        <p className='max-w-[600px] text-base font-normal leading-6'>{el.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <a href="#" className={styles.redLink}>Qabulga Yozilish</a>
            </div>
        </main>
    )
}

export default Main