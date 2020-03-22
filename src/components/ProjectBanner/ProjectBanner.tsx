import React from 'react'
import { ProjectBannerPropTypes } from './types';
import { ProjectBannerWrapper, SectionHeader, SectionDescription, MoreBannerWrapper, DescriptionWrapper, ProjectImage, AreaWrapper, StackWrapper, StackIcon } from './utils';
import { STACK_IMAGES } from './constants';

const ProjectBanner: React.SFC<ProjectBannerPropTypes> = ({image, gif, title, description, stacks, stackDescription, landscape, index}) => {
    return(
        <ProjectBannerWrapper 
            landscape={landscape} 
            data-aos={index%2 ? `fade-right` : `fade-left`}
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div>
                <SectionHeader>{title}</SectionHeader>
                <SectionDescription>{description}</SectionDescription>
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