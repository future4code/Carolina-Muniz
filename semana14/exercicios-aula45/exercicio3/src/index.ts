import * as fs from 'fs'


function criarTarefa(tarefa: string): void {
    const fileName: string = 'tarefas.json'
    const fileBuffer: Buffer = fs.readFileSync(fileName)
    const fileText :string = fileBuffer.toString()
    const tarefas: string[] = JSON.parse(fileText)
    const novaTarefa: string = process.argv[2]
    
    tarefas.push(novaTarefa)

    const tarefasAtualizadas: string = JSON.stringify(tarefas)

    fs.writeFileSync(fileName, tarefasAtualizadas)

    console.log(tarefas)
}
criarTarefa("")