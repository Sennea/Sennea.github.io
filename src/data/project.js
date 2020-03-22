import instagramImg from '../images/instagram.png'
import instagramGif from '../images/instagram.gif'
import cellularAutomataImg from '../images/celluralAutomata.png'
import cellularAutomataGif from '../images/celluralAutomata.gif'
import engeenerImg from '../images/engeener.png'
import engeenerGif from '../images/engeener.gif'
import gameOfLifeImg from '../images/gameOfLife.png'
import gameOfLifeGif from '../images/gameOfLife.gif'
import mesImg from '../images/mes.JPG'
import mesGif from '../images/mes.gif'
import toDoListImg from '../images/toDoList.png'
import toDoListGif from '../images/toDoList.gif'
import weatherImg from '../images/weather.png'
import weatherGif from '../images/weather.gif'
import meImg from '../images/photo2.jpg'



export const projects = [
    {
        image: meImg,
        gif: meImg,
        title: 'Current Job',
        description: 'I\'m currently working as a Software Developer in Grand Parade- part of William Hill Company. I\' ve started work here in July 2019 and due that time I\'ve increased my knowledge a lot',
        stacks: ['React', 'JavaScript', 'TypeScript', 'GraphQl', 'ReactRedux'],
        stackDescription: 'I\'m working with ReactJs based on TypeScript. I\'m constantly writing unit tests using react testing library, jest and enzyme. I am also familiar with usage of GrapgQL and React Redux ',
    },
    {
        image: instagramImg,
        gif: instagramGif,
        title: 'Instagram Like App',
        description: 'It was my first project created for university lessons. It is application similar to instagram. It allows user to register, login, add photos and relations which will dissapear in 1 day. They also can comment, like and unlike photos, just like in real Instagram ',
        stacks: ['React', 'NodeJS', 'Bootstrap', "MongoDB", 'JavaScript'],
        stackDescription: 'Backend of the project was created with NodeJS and expressJS, with MongoDB database. Frontend was created with the use of ReactJS and bootstrap'
    },
    {
        image: engeenerImg,
        gif: engeenerGif,
        title: 'Virtual Reality',
        description: 'It is project I\'ve created for my Engineering work. It is a virtual reality application which allow user to place virtual object in real life. User can rotate them, move and even walk around them ',
        stacks: ['ReactNative'],
        stackDescription: 'Application was created with the use of React Native and Viro React'
    },
    {
        image: cellularAutomataImg,
        gif: cellularAutomataGif,
        title: 'Recrystalization modeling',
        description: 'It is another project created for university lessons. It is  used to simulate how grains in metal will grow in time with usage of different techniques which increase realism of that process',
        stacks: ['Csharp'],
        stackDescription: 'Whole app, visualisation and logic was created with the use of C#'
    },
    {
        image: gameOfLifeImg,
        gif: gameOfLifeGif,
        title: 'Cellular Automata',
        description: 'Cellular automata is a discrete model studied in computer science, mathematics, physics, complexity science, theoretical biology and microstructure modeling. This program allows to visualise that process',
        stacks: ['Csharp'],
        stackDescription: 'Whole app, visualisation and logic was created with the use of C#'
    },
    {
        image: toDoListImg,
        gif: toDoListGif,
        title: 'To do list',
        description: 'It is simple application for android devices allowing user to create todo tasks, delete and modify them',
        stacks: ['Android'],
        stackDescription: 'App was created with Android. I\'ve also created my own images for that project using Inkscape'
    },
    {
        image: weatherImg,
        gif: weatherGif,
        title: 'Weather',
        description: 'It is simply a weather application, which uses user current location, and different ones chosen by the user',
        stacks: ['Android'],
        stackDescription: 'App was created with Android. I\'ve also created my own images for that project using Inkscape'
    },
    {
        image: mesImg,
        gif: mesGif,
        title: 'Finite Elements Method',
        description: 'Finite Elements Method is the most widely used method for solving problems of engineering and mathematical models. Application allows user to see how the temperature will change in material in different amount of time. For me it was used to check what are differences between window with double glazing and single glass. I\'ve also used it to check which material used for jackets keeps heat for the longest amount of time ',
        stacks: ['Cpp'],
        stackDescription: 'Whole project was created using C++'
    },
]