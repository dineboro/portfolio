import React from 'react';
//import My_portrait from '../assets/ProjectsItems';
import ViewButton from './ViewButton';
import My_portrait from '../assets/ProjectsItems';

function About() {
    return (
            <div className='about__box'>
                <div className='about__box-text'>
                    <div className='about__box-image'>
                        <My_portrait />
                    </div>
                    
                    <h2 className=''>About Me</h2>
                    <p >Hello! I'm Dine Boro, a passionate web developer currently pursuing an Associate of Applied Science in Web Application Development at Kirkwood Community College in Cedar Rapids, Iowa, with an expected graduation date of May 2026. My major program focuses on creating user-friendly, secure, and efficient web applications, equipping me with both front-end and back-end development skills through a blend of theoretical knowledge and practical experience. This comprehensive education has prepared me to enter the growing field of web development, enabling me to design, build, and deploy robust web applications that meet the needs of today's digital businesses.</p>
                        
                    <p>I graduated from Zongo 2 High School in June 2012, where I focused on three disciplines: Maths, Physics, and Biology-Geology. My academic journey continued with several certifications, including the Google UX Design Certificate, which I completed online from January to July 2023. This rigorous training covered UX research fundamentals, inclusive design, low-fidelity and high-fidelity prototypes, and tools like Figma and Adobe XD. I developed a portfolio with three projects to earn the certificate. Additionally, I completed the Yale University Introduction to Psychology Certificate from April to July 2023, gaining comprehensive knowledge in reasoning, problem-solving, abstract thinking, analytical and critical thinking, and an overview of the scientific study of thought and behavior. I also hold a Digital Marketing Certificate from Hubspot Academy, where I learned to apply digital marketing practices with an inbound mindset.</p>

                    <p>My professional experience includes a role as a Product Design/Marketing Apprentice at BPF through Acadium from July to November 2023. BPF focuses on educating student-athlete parents about their child's mental health. In this role, I designed product/service pages for campaigns, managed podcast platforms, and built interview questions.  I possess a diverse set of technical skills, including Network-Plus, PC & Windows Support, troubleshooting, Python, HTML-CSS, Figma, Adobe Suite (XD, Photoshop, Indesign), Wordpress, Shopify, Microsoft Office, Google Workspace, SQL Database, Java, and Sass. My design skills encompass user research, wireframing, user narrative, usability studies, presentation, prototyping, human factors, design systems, and hierarchy and flow charts. I am also highly collaborative, communicative, detail-oriented, and adept at giving design critique and feedback.</p>
                    <div className="about__button">
                        <ViewButton />
                    </div>
                        
                    </div>
                </div>
    )
}

export default About;