import moment from "moment";

export type evento = {
    nome: string,
    descricao: string,
    dataInicio: moment.Moment,
    dataFinal: moment.Moment
}

export const agenda: evento[] = [
    {
        nome: 'Dentista',
        descricao: 'Consulta com dentista.',
        dataInicio: moment('27/06/2020 09:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment('27/06/2020 10:00', 'DD/MM/YYYY HH:mm')
    },   

    {
        nome: 'Supermercado',
        descricao: 'Compras para a quinzena.',
        dataInicio: moment('28/06/2020 20:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment('28/06/2020 21:00', 'DD/MM/YYYY HH:mm')
    },

    {
        nome: 'Viagem',
        descricao: 'Quarentena em Fortaleza.',
        dataInicio: moment('04/07/2020 08:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment('04/08/2020 15:00', 'DD/MM/YYYY HH:mm')
    }
    
]







