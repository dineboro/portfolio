import { useState } from "react";
//import '../styles/BioCard.scss';

const BioCard = ({profilePicture, name, bio, skills, tools}) => {
    const [showMore, setshowMore] = useState(false);

    const toggleShowMore = () => {
        setshowMore(!showMore);
    };
    return (
        <div className = "bio-card">
            <img src={profilePicture} alt="" className="profile-picture"/>
            <h2>{name}</h2>
            <p className="bio">
                {showMore ? bio: 'Hi, my name is Dine Boro. I am currently a college student at Kirkwood Community College in WEB APPLICATION DEVELOPMENT...'}
                <div>
                    <button onClick={toggleShowMore}>
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </p>
            <div className="talent">
                <ul className="talent__skills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <ul className="talent__tools">
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



export default BioCard;