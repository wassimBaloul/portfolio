import React from 'react'
import ViewsTitle from '../../components/ViewsTitle';

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleProject = (props) => {
  const { index } = props
  const side = getSide(index);

  return (
    <div className='ai-projects-single'>
      <div className='row'>
        <div className={`col-12 d-flex align-items-center`}>
          <ProjectTextSide {...props} side={side} />
        </div>
      </div>
    </div>
  )
}

const ProjectTextSide = ({ label, title, description, techs, side }) => {
  return (
    <div
      data-aos={`fade-down-${side}`}
      className={`ai-projects-text-side ai-projects-text-side-${side}`}
    >
      {label && (
        <div
          data-aos={`zoom-in-${side}`}
          className='ai-projects-text-featured'
        >
          {label}
        </div>
      )}
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-title'
      >
        {title}
      </div>
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-description'
      >
        {description}
      </div>
      <div
        data-aos={`zoom-in-${side}`}
        className='ai-projects-text-tecs'
      >
        {techs.map((tech, i) => `${tech}${techs.length - 1 !== i ? ' | ' : ''}`)}
      </div>
    </div>
  )
}

const Projects = ({ data: { heading, list } }) => {
  return (
    <div className='ai-projects'>
      <div className='container'>
        <div className='ai-projects-container'>
          <ViewsTitle text={heading} />
          <div className='row justify-content-center'>
            {(list || []).map((project, i) => (
              <SingleProject key={i} index={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
