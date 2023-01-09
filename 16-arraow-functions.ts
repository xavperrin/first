function saveCourse (course, toto_callback: Function) {
    setTimeout(()=> {
        toto_callback("success")
    }, 1000);


}
saveCourse ({title: "Typescript Bootcamp "},()=>   console. log("Save successful. ") );
