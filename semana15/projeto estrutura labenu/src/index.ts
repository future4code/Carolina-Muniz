import { FileManager } from "./FileManager"
import { student1, student2, student3, student4 } from "./Students"
import { teacher1, teacher2, teacher3 } from "./Teachers"
import { fullTimeMission } from "./FullTimeMission"
import { nightMission } from "./NightMission"

const fileManager = new FileManager('students.json')

fileManager.registerInJson(student1)
fileManager.registerInJson(student2)
fileManager.registerInJson(student3)

fileManager.setFilePath('teachers.json')

fileManager.registerInJson(teacher1)
fileManager.registerInJson(teacher2)
fileManager.registerInJson(teacher3)

fileManager.setFilePath('missions.json')

fullTimeMission.setName('Turma 1')
fullTimeMission.addStudent(student1)
fullTimeMission.addStudent(student2)
fullTimeMission.addTeacher(teacher1)

fileManager.registerInJson(fullTimeMission)

nightMission.setName('Turma 2')
nightMission.addStudent(student3)
nightMission.addStudent(student4)
nightMission.addTeacher(teacher2)
nightMission.addTeacher(teacher3)

fileManager.registerInJson(nightMission)
