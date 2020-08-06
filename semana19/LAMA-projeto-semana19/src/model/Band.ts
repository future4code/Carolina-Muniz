export class Band{

    constructor(
        private id: string,
        private name: string,
        private musicGenre: string,
        private responsible: string,
    ) {}


    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getMusicGenre(){
        return this.musicGenre
    }

    getResponsible(){
        return this.responsible
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setMusicGenre(){
        this.musicGenre
    }

public static toBandModel(object: any): Band{
    return new Band(
        object.id,
        object.name,
        object.musicGenre,
        object.responsible,
    )
}

}

export interface BandInputDTO{
    name: string,
    musicGenre: string,
    responsible: string
}


