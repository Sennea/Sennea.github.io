import styled, {keyframes} from "styled-components";
import { ComponentPropTypes, ImagePropTypes } from "./types";
import { MAIN_COLOR, MAIN_COLOR_LIGHT } from "../../constants";

const fadeIn = keyframes`
  from {
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
`;

export const ProjectBannerWrapper = styled.div<ComponentPropTypes>`
    margin:  ${props => props.landscape ? `40px 10% 0 10%` : `40px 2% 0 2%`} ;
    border-radius: 10px;
    border-top: 5px solid ${MAIN_COLOR};
    padding: 10px 0;
`;

export const MoreBannerWrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    padding: 5px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProjectImage = styled.div<ImagePropTypes>`
    flex-basis: ${props => props.landscape ? `55%` : `100%` };
    min-height: 250px;
    width: 100%;
    opacity :${props => props.landscape ? 0.6 : 1 };
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-image: url(${props => props.landscape ? props.image : props.gif});
    &:hover {
        animation:${fadeIn} 1s ease-in forwards;
        background-image: url(${props => props.gif});
        transition-delay: 500ms;
    }
    background-clip: border-box
`;

export const AreaWrapper = styled.div<ComponentPropTypes>`
    flex-basis: ${props => props.landscape ? `40%` : `100%` };
    display: flex;
    flex-direction: column;
`;

export const StackWrapper = styled.div<ComponentPropTypes>`
    display: flex;
    justify-content: center;
    margin: ${props => props.landscape? 0 : `10px 0 `};
    flex-wrap: wrap;
`;

export const StackIcon = styled.div<ComponentPropTypes>`
    width: ${props => props.landscape ? `50px` : `35px`};
    height: ${props => props.landscape ? `50px` : `35px`};
    margin: 5px 10px;
`;

export const DescriptionWrapper = styled.h3`
    margin-top: 10px;
    font-size: 16px;
    color: ${MAIN_COLOR_LIGHT};
    font-weight: 300;
`;


export const SectionHeader = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin: 0;
`;

export const SectionDescription = styled.h3`
    font-size: 16px;
    font-weight: 300;
    color: gray;
    margin: 5px 0 10px 0;
`;

export const SectionDescriptionLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: gray;
    margin: 5px 0 10px 0;
`;