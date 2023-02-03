import express, { Request, Response } from "express";
import { AppDataSource } from "./db/db.config";
import {StudentEntity} from "./entities/student.entity";
import {CourseEntity} from "./entities/course.entity";


const app = express();


app.get("/", async (req: Request, res: Response) => {
    const studentRepo = AppDataSource.getRepository(StudentEntity);
    // const courseRepo = AppDataSource.getRepository(CourseEntity);

    let students = await studentRepo.find();
    res.json(students);

})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        app.listen(3000, () => console.log("Sever is started on port 3000"));
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


//
// let course1 = new CourseEntity();
// course1.name = "Database";
// course1.courseCode = "OODA";
// course1.description = "Database Systems";
//
// let course2 = new CourseEntity();
// course2.name = "Alogorithms";
// course2.courseCode = "OOAA";
// course2.description = "Algo Course";
//
// let course3 = new CourseEntity();
// course3.name = "Programming";
// course3.courseCode = "OOPA";
// course3.description = "Java Programming";
//
//
//
//
// let student = new StudentEntity();
// student.age = 25;
// student.fatherName = "Arshad";
// student.name = "Amir";
// student.courses = [course1 , course2 , course3];
//
//
// await studentRepo.save(student);