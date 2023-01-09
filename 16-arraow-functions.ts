function saveCourse (course, callback: Function) {
    setTimeout(function () {
        callback("success")
    }, 1000);


}
saveCourse ({title: "Typescript Bootcamp "},
        function(){
        console. log("Save successful. ") ;

    });