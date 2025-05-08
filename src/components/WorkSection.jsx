import React from 'react';
//import ProjectsItems from '../assets/ProjectsItems';
import mywork_data from '../assets/mywork_data';
//import WorkCard from './WorkCard';
// const projects = [
//     {
//         title:'HTML CSS project',
//         description: ' At glance' ,
//         tech: ['CSS, HTML'],
//         liveLink: '#link',
//         githubLink: '#link',

//     }
//]
const WorkSection = () => {
    return (
        <div className='mywork' >
            <div className='mywork__title'>
                <h1>My latest work</h1>

            </div>
            <div className="mywork__container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=''/>
                })}
            </div>
            <div className="mywork__showmore">

            </div>
        </div>
    )
}

export default WorkSection;