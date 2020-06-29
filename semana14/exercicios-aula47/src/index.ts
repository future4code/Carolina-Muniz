import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

//EXERCÍCIO 1
//a. GET /subscribers/all
//b. Tipagem: any[]
async function getAllSubscribers(): Promise<any[]> {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    //console.log(subscribers)
    return subscribers.data     
}
getAllSubscribers()


//EXERCÍCIO 2
//a. 
const getAllSubscribers2 = async (): Promise<any[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    //console.log(subscribers.data)
    return subscribers.data
}
getAllSubscribers2()

//EXERCÍCIO 3
//a. não muda pois está usando a tipagem do type
//b. o map é para garantir que o retorno da função é o mesmo que foi indicado no type
type subscriber = {
    id: string
    name: string
    email: string
}
const getAllSubscribers3 = async(): Promise<subscriber[]> => {
    const subscriber = await axios.get(`${baseUrl}/subscribers/all`)
    return subscriber.data.map((response: any) => {
        id: response.id
        name: response.name
        email: response.email
        //console.log(response)
    })
}
getAllSubscribers3()