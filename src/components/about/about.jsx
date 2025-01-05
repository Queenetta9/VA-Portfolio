import React from 'react'
import Image from 'next/image'
import Queen from '/public/Queenn.jpg'
const about = () => {
  return (
    <>
      <div className='lg:flex block justify-center p-4 gap-x-8 w-full'>
          <div>
               <Image 
               width={350}
               height={350}
               src={Queen}
               alt='Queen'
               className='rounded'
               />
          </div>
          <div className='lg:w-[50%] w-full'>
               <h2 className='font-bold text-[3em] text-[var(--brown)] text-center mt-4'>About Me</h2>
               <p className='mt-4'>As a highly skilled and versatile Virtual Assistant, I bring a wealth of experience in administrative support, project management, client relations, and creative content production. With a proven track record of streamlining workflows, managing complex schedules, and delivering high-quality outputs, I pride myself on my: organizational efficiency, proactive problem-solving, and strong communication skills. My ability to adapt to new technologies and tools allows me to deliver tailored solutions that meet client needs effectively.</p>

               <p className='mt-4'>Outside of work, I enjoy immersing myself in books that span various genres, from fiction to personal development. Reading has nurtured my curiosity, analytical thinking, and problem-solving skills, which translate seamlessly into my professional life. Additionally, cooking is another passion of mine, allowing me to explore creativity, precision, and patience—qualities that align well with my role as a Virtual Assistant. Whether trying out a new recipe or perfecting a classic dish, I thrive on the process of creating something meaningful and enjoyable.</p>

               <p className='mt-4 font-bold'>Core Skills:</p>
               <ul>
                    <li>- Administrative Support</li>
                    <li>- Project Management </li>
                    <li>- Client Relationship Management </li>
                    <li>- Social Media Management </li>
                    <li>- Content Development </li>
                    <li>- Technical Expertise</li>
                    <li>- E-Commerce Assistance</li>
               </ul>


               <p className='mt-4 font-bold'>Soft Skills:</p>
                    <ul>
                         <li>Effective Communication</li>
                         <li>Time Management</li>
                         <li>Problem-Solving</li>
                         <li>Adaptability</li>
                         <li>Attention to Detail</li>
                         <li>Interpersonal Skills</li>
                         <li>Initiative</li>
                    </ul>

                    <p className='mt-4 font-bold'>Tools:</p>
                    <ul>
                         <li>Google Workspace (Docs, Sheets, Slides), Microsoft Office Suite, Trello, Notion.</li>
                         <li>Zoom, Slack, Microsoft Teams</li>
                         <li>Canva</li>
                         <li>Zoho CRM, HubSpot CRM</li>
                         <li>Hootsuite, Buffer</li>
                    </ul>
          </div>
      </div>
    </>
  )
}

export default about
