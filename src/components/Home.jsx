import { useState } from "react";
//import '../scss/components/home.scss';
import my_portrait from '../assets/my_portrait.PNG';
import BioCard from "./BioCard";

const Home =() =>{
    const profile = {
    profilePicture: my_portrait,
    name: 'DINE BORO',
    bio: 'I am currently a college student at KCC in WEB APPLICATION DEVELOPMENT.I have some experience in the folling programming languages, I also, worked with CMS such as Wordpress, Shopify, Square.',
    skills: ['HTML & CSS','JavaScript', 'React', 'Sass','Python', 'Java', 'MySQL','Deployment','UML'],
    tools: ['Adobe Suit', 'Figma', 'Google Analytic','SQL Workbench', 'Visual Studio Code','Github','Git', 'Framewoks', 'Wordpress']
  };

  return (
    <div className="home__container">
      <BioCard
        profilePicture={profile.profilePicture}
        name={profile.name}
        bio={profile.bio}
        skills={profile.skills}
        tools={profile.tools}
      />
    </div>
  );
};



export default Home;