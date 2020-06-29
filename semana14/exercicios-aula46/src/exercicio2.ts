import {agenda, evento} from './exercicio1'
import moment from 'moment'
moment.locale("pt-br")

function meusCompromissos(compromissos: evento[]): void {
    compromissos.forEach((info: evento) => {
        
        console.log(`
            Nome: ${info.nome}
            Horário de início: ${info.dataInicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${info.dataFinal.format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${info.descricao}
            Horário inicial em Londres, Inglaterra: ${info.dataInicio.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário final em Londres, Inglaterra: ${info.dataFinal.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")} 
        `)
    })
}

meusCompromissos(agenda)



