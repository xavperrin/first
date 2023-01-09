import {PAGE_SIZE, COURSE} from "./12-modules-exports";


const pageSize= PAGE_SIZE;


const course=COURSE;

export {
    PAGE_SIZE as MAX_PAGE_SIZE // renaming
}

//import {Course, loadAllCourses, saveCourse} from "./14-module-reexports"//index.ts default file

import * as constants from "./15-default-exports";
import printcourse from "./15-default-exports";

printcourse(constants.TYPESCRYPT_COURSE);