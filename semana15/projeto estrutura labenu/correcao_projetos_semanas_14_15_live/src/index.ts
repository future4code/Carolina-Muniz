import {FileManager} from "./FileManager";
import {student1, student2, student3, student4} from "./Student";
import {teacher1, teacher2, teacher3} from "./Teacher";
import {fullTimeMission} from "./FullTimeMission";
import {nightMission} from "./NightMission";

const fm = new FileManager('students.json');


fm.registerInJson(student1);
fm.registerInJson(student2);
fm.registerInJson(student3);
fm.registerInJson(student4);

fm.setFilePath('teachers.json');

fm.registerInJson(teacher1);
fm.registerInJson(teacher2);
fm.registerInJson(teacher3);

fm.setFilePath('missions.json');

fullTimeMission.setName('Belezinha');
fullTimeMission.addStudent(student1);
fullTimeMission.addStudent(student2);
fullTimeMission.addTeacher(teacher1);

fm.registerInJson(fullTimeMission);

nightMission.setName('Bananinha');
nightMission.addStudent(student3);
nightMission.addStudent(student4);
nightMission.addTeacher(teacher2);
nightMission.addTeacher(teacher3);

fm.registerInJson(nightMission);



