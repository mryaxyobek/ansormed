import React from 'react'
import doctorImg from '../assets/images/hero-doctor-img.png'
import { styles } from '../assets/style'

const Hero = () => {
  return (
    <div className='bg-[#0EB4C1;]'>
      <div className="container flex items-center justify-between pt-7">
        <div className='text-white'>
          <h2 className="text-4xl font-bold max-w-[500px] mb-4">Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
          <p className="max-w-[440px] mb-9 text-lg font-normal">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
          <a href="#" className={styles.redLink}>Qabulga yozilish</a>
        </div>
        <img src={doctorImg} alt="doctor img" />
      </div>
    </div>
  )
}

export default Hero