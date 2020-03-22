import styled from "styled-components";
import { ComponentPropTypes } from "./types";
import { MAIN_COLOR, MAIN_COLOR_LIGHT } from "../../constants";

export const Avatar = styled.img<ComponentPropTypes>`
    width: ${props => props.landscape ? `130px` : `100px`};
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    transform: translateY(-50%);
    border: 5px solid ${MAIN_COLOR};
    z-index: 1;
    background-color: transparent;
`;

export const InfoBannerWrapper = styled.div<ComponentPropTypes>`
    margin:  ${props => props.landscape ? `80px 10% 0 10%` : `60px 2% 0 2%`} ;
    border-radius: 10px;
    background-color: white;
    border-top: 5px solid ${MAIN_COLOR};
    border-bottom: 5px solid ${MAIN_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

export const TextWrapper = styled.span`
    margin-bottom: 10px;
    padding: 0 20px;
`;

export const NameWrapper = styled(TextWrapper)`
    font-size: 20px;
    letter-spacing: 0.2em;
    font-weight: 600;
    text-transform: uppercase;
    margin: 80px auto 10px auto;
`;

export const RoleWrapper = styled(TextWrapper)`
    font-size: 16px;
    color: ${MAIN_COLOR_LIGHT};
    font-weight: 600;
    line-height: 20px;
    font-style: italic;
`;

export const InfoWrapper = styled(TextWrapper)`
    font-size: 16px;
    color: ${MAIN_COLOR_LIGHT};
    font-weight: 400;
    line-height: 20px;
`;

export const MediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const SocialMediaWrapper = styled.a`
    max-width: 50px;
    max-height: 50px;
    margin: 0 10px 10px 10px;
`;