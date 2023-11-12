import React, {useRef} from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'

export default function Projects() {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

