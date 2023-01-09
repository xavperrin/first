function saveCourse(course, toto_callback) {
    setTimeout(function () {
        toto_callback("success");
    }, 1000);
}
saveCourse({ title: "Typescript Bootcamp " }, function () {
    console.log("Save successful. ");
});
