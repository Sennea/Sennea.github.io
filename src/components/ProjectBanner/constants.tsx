import React from 'react'
import {AndroidIcon, ArduinoIcon, DjangoIcon, PythonIcon, VueIcon, ReactIcon, TypeScriptIcon,ReactReduxIcon, GraphQlIcon, NodeJSIcon, BootstrapIcon, CppIcon, CsharpIcon, MongoDBIcon, JavaScriptIcon, ReactNativeIcon, AWSIcon} from '../SvgIcons'

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
    Arduino: <ArduinoIcon/>,
    Django: <DjangoIcon/>,
    Python: <PythonIcon/>,
    Vue: <VueIcon/>,
    AWS: <AWSIcon/>,
}