interface Author {
    firstname:string;
    lastname:string;
}


interface Course{
    title:string;
    subtitle:string;
    lessonsCount:number;
    author:Author;

}

const course:Course={
    title:"Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10,
    author:{
        firstname:"Vasco",
        lastname:"Cavalheiro"
    }
}


const otherCourse:Course={
    title: "Typescript Bootcamp v2",
    subtitle: "Learn the language fundamentals, build practical p Paramat",
    lessonsCount: 10,
    author:{
        firstname:"Umberto",
        lastname:"Eco"
    }

}

console.log(course);