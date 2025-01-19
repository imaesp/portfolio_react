import React from 'react'
import './ProjectCard.scss'

function ProjectCard({Image, Title, SubTitle, Technologies, Links}) {
  return (
    <div class="card">
        <h5 class="card-title">{Title}</h5>
        <div className="project-links">
            {Links && Links.website && (
                <a href={Links.website} target="_blank" rel="noopener noreferrer">
                    <img src={Links.websiteImage} alt="Website" className="link-image" />
                </a>
            )}
            {Links && Links.github && (
                <a href={Links.github} target="_blank" rel="noopener noreferrer">
                    <img src={Links.githubImage} alt="GitHub" className="link-image" />
                </a>
            )}
        </div>
        <img src={Image} alt="" width="100%"/>
        <div class="card-body">
            <p class="card-text">{SubTitle}</p>
            <div className='technologies'>
                {Technologies.map((src, index) => (
                    <img key={index} src={src}/>
                ))}
            </div>
        </div>
    </div>
  )
}
export default ProjectCard