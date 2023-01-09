export const PAGE_SIZE=100;

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

export const COURSE:Course={
    title:"Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10,
    author:{
        firstname:"Vasco",
        lastname:"Cavalheiro"
    }
}