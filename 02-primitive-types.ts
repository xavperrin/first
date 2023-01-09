// primitive number
const lessonsCount:number=10;
const total = lessonsCount+10;
console.log("Total =", total);

//primitive :string
let title: string =`Typescript bootcamp`;
let subtitle: string="Learn the language fundamentals, build practical projects";

const fullTitle=`${title} : ${subtitle}`;

console.log(`Full title :clear`, fullTitle)

// primitive published : boolean
let published =true;

if(published){
    console.log("The course is published");
}

printCourse(title, subtitle, lessonsCount);
function printCourse(title: string , subtitle:string, lessonCount:number){

    const fullTitle=`${title} : ${subtitle}`;

    console.log("type before "+ typeof fullTitle);
}

const course={
    title:"Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10,
    author:{
        firstname:"Vasco",
        lastname:"Cavalheiro"
    }
}


console.log("type of course"+ typeof course)
console.log(course.author.lastname);