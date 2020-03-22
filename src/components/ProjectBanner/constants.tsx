import React from 'react'
import {AndroidIcon, ReactIcon, TypeScriptIcon,ReactReduxIcon, GraphQlIcon, NodeJSIcon, BootstrapIcon, CppIcon, CsharpIcon, MongoDBIcon, JavaScriptIcon, ReactNativeIcon} from '../SvgIcons'

export const STACK_IMAGES: {[key: string]: React.ReactNode} = {
    React: <ReactIcon/>,
    TypeScript: <TypeScriptIcon/>,
    GraphQl: <GraphQlIcon/>,
    NodeJS: <NodeJSIcon/>,
    Android: <AndroidIcon/>,
    Cpp: <CppIcon/>,
    Csharp: <CsharpIcon/>,
    Bootstrap: <BootstrapIcon/>,
    MongoDB: <MongoDBIcon/>,
    JavaScript: <JavaScriptIcon/>,
    ReactNative: <ReactNativeIcon/>,
    ReactRedux: <ReactReduxIcon/>,
}