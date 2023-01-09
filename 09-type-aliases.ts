type CourseStatus="draft"|"published"|"unpublished"|"archived";



let courseStatus:CourseStatus="published";



console.log("course status :", courseStatus);
type Author={
    firstname:string,
    lastname:string
}

type Course={
    title:string,
    subtitle:string,
    lessonsCount:number
    author:Author

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

console.log(course);