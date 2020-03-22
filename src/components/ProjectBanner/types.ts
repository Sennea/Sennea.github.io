export interface ProjectBannerPropTypes {
    image: string;
    title: string;
    description: string;
    stacks: string[];
    stackDescription: string;
    landscape: boolean;
    gif?: string;
    index: number;
}

export interface ComponentPropTypes {
    landscape: boolean;
}

export interface ImagePropTypes {
    image: string;
    gif: string;
    landscape?: boolean;
    left?: boolean;
}

export type StackType = 
| 'React' 
| 'TypeScript' 
| 'GraphQl' 
| 'NodeJS' 
| 'Android' 
| 'Cpp' 
| 'Csharp' 
| 'Bootstrap' 
| 'MongoDB' 
| 'StyledComponents' 
| 'JavaScript';
