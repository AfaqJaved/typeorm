import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {CourseEntity} from "./course.entity";


@Entity({name : "student"})
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    age : number;

    @Column()
    fatherName : string;

    @ManyToMany(() => CourseEntity ,
        {cascade : true , eager : true})
    @JoinTable({name : "student_courses"})
    courses: CourseEntity[]
}