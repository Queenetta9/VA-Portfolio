import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {SiCalendly} from 'react-icons/si'

const Explore = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full flex-col p-4 '>
        {/* <div className=''>
          <h1 className='font-bold text-[2.7em] text-[var(--brown)] text-center'>Client's Testimonial</h1>
        </div>
        <div className='grid grid-rows-2'>
          <Image 
          width={100}
          height={100}
          src={''}
          alt='Testimonial'
          />
        </div> */}
        <div>
          <h2 className='font-bold text-[2.7em] text-[var(--brown)] text-center'>Past Experiences</h2>

          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center'>~ Virtual Assistant</h3>
          <p className='text-center text-[20px] w-full'>- Conducted research and compiled data to supportdecision-making processes and enhance operational efficiency.
          </p>
          <p className='text-[20px] text-center'>- Streamlined administrative processes, implementing digital tools and systems to improve productivity and communication.</p>
        </div>

        <div>
          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center mt-4'>~ Administrative Assistant.</h3>
          <p className='text-center text-[20px]'>- Organized and maintained executives' calendars, scheduled meetings, and handled appointment rescheduling </p>
          <p className='text-center text-[20px]'>- Streamlined email inboxes by categorizing, prioritizing, and responding to messages, reducing response times by 40%.</p>
          <p className='text-center text-[20px]'>- Inputted and organized large datasets in Google Sheets and Excel, ensuring accuracy and efficiency for business reports.</p>
          <p className='text-center text-[20px]'>- Created, formatted, and proofread professional documents, reports, and presentations using Google Docs, Slides, and Canva.</p>
          <p className='text-center text-[20px]'>- Attended meetings on behalf of clients, prepared summaries, and ensured action points were followed through.</p>
        </div>
 
        <div>
          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center mt-4'>~ Virtual Assistant to an Event Management Business</h3>
          <p className='text-center text-[20px]'>- Assisted in organizing and scheduling events.</p>
          <p className='text-center text-[20px]'>- Handled logistics and vendor coordination.</p>
          <p className='text-center text-[20px]'>- Prepared event materials and manage RSVPs.</p>
          <p className='text-center text-[20px]'>- Follow up with clients post-event for feedback and testimonials.</p>
        </div>

        <div>
          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center mt-4'>~ Travel cordinatoor</h3>
          <p className='text-center text-[20px]'>- Researched and booked international and domestic flights, accommodations, and transportation for executives and teams.</p>
          <p className='text-center text-[20px]'>- Coordinated logistics for team-building activities, workshops, and conferences, ensuring all elements ran smoothly.</p>
          <p className='text-center text-[20px]'>- Prepared event materials and manage RSVPs.</p>
          <p className='text-center text-[20px]'>- Sourced and negotiated with vendors for services, saving 15% on average event costs.</p>
        </div>

        <div>
          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center mt-4'>~ Virtual Assistant</h3>
          <p className='text-center text-[20px]'>- Managed and maintained schedules and appointments.</p>
          <p className='text-center text-[20px]'>- Handled email and calendar management, promptly responding to inquiries and scheduling meetings.</p>
          <p className='text-center text-[20px]'>- Conducted research topics as requested.</p>
        </div>

        <div>
          <h3 className='font-bold text-[1.5em] text-[var(--brown)] text-center mt-4'>~ Project Manager</h3>
          <p className='text-center text-[20px]'>- Used tools like Trello and Notion to assign, track, and manage team tasks, ensuring deadlines were met.</p>
          <p className='text-center text-[20px]'>- Created weekly progress reports for ongoing projects, highlighting milestones and potential bottlenecks.</p>
          <p className='text-center text-[20px]'>- Prepared event materials and manage RSVPs.</p>
          <p className='text-center text-[20px]'>- Improved team workflows by identifying inefficiencies and implementing new processes.</p>
        </div>


        <div className='flex flex-col items-center justify-center'>
          <p className='text-[24px] text-center font-bold mt-4'>Book a call to see if I'm a fit</p>
          < br /> 
          <Link className='p-4 bg-[var(--orange)] rounded text-[20px] hover:bg-[var(--orange-hover)]' href={'https://calendly.com/falolaelizabeth093/30min'}>Book a call</Link>
        </div>

        <div className='p-4 flex gap-x-4'>
        <Link href={'https://x.com/queenetta'}><FaTwitter className='text-[2em] cursor-pointer'/></Link>  
          <Link href={'mailto:falolaelizabeth093@gmail.com'} ><MdEmail className='text-[2em] cursor-pointer' /></Link>
          <Link href={'https://calendly.com/falolaelizabeth093/30min'}><SiCalendly className='text-[2em] cursor-pointer'/></Link>
        </div>
      </div>
      <p className='p-4 text-center text-[var(--grey)]'>© Copyright 2025 FALOLA ELIZABETH, All Rights Reserved.</p>

    </>
  )
}

export default Explore
