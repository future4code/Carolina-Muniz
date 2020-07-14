import * as bcrypt from "bcryptjs"

//método para encriptar a senha
export default class HashManager {
    public async hash(text: string): Promise<string>{
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds)
        const cipherText = await bcrypt.hash(text, salt) // recebe o dado, e combinando com o salt, produz um hash

        return cipherText //retorna o hash
    }

    public async compare(
        text: string, 
        cipherText: string
        ): Promise<boolean> {
            const result = await bcrypt.compare(text, cipherText)
            return result
    }
}