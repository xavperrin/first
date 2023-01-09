const course= null;

const title=course?.textfield?.title??"No title found"

console.log(title);


if(course?.textfield?.title){
    console.log(course.textfield.title);
}