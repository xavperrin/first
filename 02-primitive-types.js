// primitive number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("Total =", total);
//primitive :string
var title = "Typescript bootcamp";
var subtitle = "Learn the language fundamentals, build practical projects";
var fullTitle = "".concat(title, " : ").concat(subtitle);
console.log("Full title :clear", fullTitle);
// primitive published : boolean
var published = true;
if (published) {
    console.log("The course is published");
}
printCourse(title, subtitle, lessonsCount);
function printCourse(title, subtitle, lessonCount) {
    var fullTitle = "".concat(title, " : ").concat(subtitle);
    console.log("type before " + typeof fullTitle);
}
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};
