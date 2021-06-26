import React from 'react'
import { ProjectBannerPropTypes } from './types';
import { ProjectBannerWrapper, SectionHeader, SectionDescription,SectionDescriptionLink, MoreBannerWrapper, DescriptionWrapper, ProjectImage, AreaWrapper, StackWrapper, StackIcon } from './utils';
import { STACK_IMAGES } from './constants';

const ProjectBanner: React.FC<ProjectBannerPropTypes> = ({image, gif, title, description, stacks, stackDescription, landscape, index}) => {
    let multipleDescription;
    if(description.includes('<a>')) {
        multipleDescription = {
            before: description.slice(0, description.indexOf('<')),
            href: description.slice(description.indexOf('<'), description.lastIndexOf('>')+1).replace('<a>', '').replace('</a>', ''),
            after: description.slice(description.lastIndexOf('>')+1, description.length),
        }
    }

    return(
        <ProjectBannerWrapper 
            landscape={landscape} 
            data-aos={index%2 ? `fade-right` : `fade-left`}
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div>
                <SectionHeader>{title}</SectionHeader>
                {multipleDescription ? 
                <div>
                    <SectionDescription>{multipleDescription.before}</SectionDescription>
                    <SectionDescriptionLink target="_blank" href={multipleDescription.href}>{multipleDescription.href}</SectionDescriptionLink>
                    <SectionDescription>{multipleDescription.after}</SectionDescription>
                </div>    : <SectionDescription>{description}</SectionDescription>
            }
            </div>
            <MoreBannerWrapper>
                {!(index%2) || !landscape ? <ProjectImage landscape={landscape} left={true} image={image} gif={gif? gif : image}/> : null}
                <AreaWrapper landscape={landscape}>
                        <StackWrapper landscape={landscape}>
                            {stacks.map((stack: string, i: number) => <StackIcon landscape={landscape} key={i}>{STACK_IMAGES[stack]}</StackIcon>)}
                        </StackWrapper>
                    <DescriptionWrapper>{stackDescription}</DescriptionWrapper>
                </AreaWrapper>
                {index%2 && landscape? <ProjectImage landscape={landscape} image={image} gif={gif? gif : image}/> : null}
            </MoreBannerWrapper>
        </ProjectBannerWrapper>
    )
}

export default ProjectBanner