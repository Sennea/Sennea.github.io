import React from 'react'
import photo from './photo.jpg'
import {FacebookIcon, LinkedinIcon, GithubIcon} from '../SvgIcons'
import { InfoBannerWrapper, Avatar, RoleWrapper, NameWrapper, MediaWrapper, InfoWrapper, SocialMediaWrapper } from './utils'
import { InfoBannerPropTypes } from './types'


const InfoBanner: React.SFC<InfoBannerPropTypes> = ({name, role, info, facebook, github, linkedin, landscape}) => {
    return(
        <InfoBannerWrapper landscape={landscape}>
            <Avatar src={photo} landscape={landscape}></Avatar>
            <NameWrapper>{name}</NameWrapper>
            <RoleWrapper>{role}</RoleWrapper>
            <InfoWrapper>{info}</InfoWrapper>
            <MediaWrapper>
                <SocialMediaWrapper href={facebook} target="_blank"><FacebookIcon/></SocialMediaWrapper>
                <SocialMediaWrapper href={github} target="_blank"><GithubIcon/></SocialMediaWrapper>
                <SocialMediaWrapper href={linkedin} target="_blank"><LinkedinIcon/></SocialMediaWrapper>
            </MediaWrapper>
        </InfoBannerWrapper>
    )
}

export default InfoBanner