"use client"

import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section 
    id='contact'
    className=' mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28'
    ref={ref}

    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contanct me directly at <a
        className='underline'
        href='mailto:email@email.com'
        >email@email.com
        </a>{' '}
        or through this form.
        </p>

        <form className='mt-10 flex flex-col'>
            <input type='email' className=' px-4 h-14 rounded-lg border border-black/10' placeholder='Your email'/>
            <textarea className='h-52 my-3 rounded-lg border border-blac/10 p-4' placeholder='Your message'/>
            <button 
            type='submit'
            className=' group flex  items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
        </form>
    </motion.section>
  )
}
