import * as fs from "fs"
import { Students } from "./Students"
import { Teachers } from "./Teachers"
import { Missions } from "./Missions"

export class FileManager {
    constructor(
        private filePath: string
    ) {}

    public setFilePath(path:string): void{
        this.filePath = path
    }

    public writeFile(data: any): void{
        fs.writeFileSync(this.filePath, JSON.stringify(data))
    }

    public readFiel(): any {
        const data = fs.readFileSync(this.filePath)
        return JSON.parse(data.toString())
    }

    public registerInJson(classInstance: Students | Teachers | Missions) {
        let classInstances: (Students | Teachers | Missions)[] = []
        try{
            classInstances = this.readFiel()
        } catch(erro){
            if(erro){
                this.writeFile(classInstances)
            } 
        }
        classInstances.push(classInstance)   //refere-se a tipagem do registerInJson
        return this.writeFile(classInstances)
    }
}