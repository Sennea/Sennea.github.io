import React from 'react'
import styled from 'styled-components';

const LayoutWrapper = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 10px;
`;

export interface LayoutType { 
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({children}) => {
    return(
        <LayoutWrapper>{children}</LayoutWrapper>
    )
}

export default Layout