import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase{
    
    private static TABLE_NAME = "LAMA_Bands"

    public async register(
        id: string,
        name: string,
        musicGenre: string,
        responsible: string
    ) {
        try {
            await super.getConnection()
            .insert({
                id,
                name,
                music_genre: musicGenre,
                responsible
            })
            .into(BandDatabase.TABLE_NAME)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}