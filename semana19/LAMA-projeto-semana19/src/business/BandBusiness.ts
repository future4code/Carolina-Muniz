import { IdGenerator } from "../service/IdGenerator"
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {
    public async register(
        name: string,
        musicGenre: string,
        responsible: string
    ): Promise <void>{
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const bandDatabase = new BandDatabase();
        await bandDatabase.register(
            id, 
            name,
            musicGenre, 
            responsible);
    }

    public async info(input){
        const bandDatabase = new BandDatabase();

        return await bandDatabase.info(input) 
    }
}