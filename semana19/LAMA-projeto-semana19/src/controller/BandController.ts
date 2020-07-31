import express, { Request, Response } from "express";
import { Authenticator } from "../service/Authenticator";
import { BandBusiness } from "../business/BandBusiness";


export class BandController {
    public async register (req: express.Request, res: express.Response) {
        try {
            const authenticator = new Authenticator();
            const tokenData = authenticator.getData(
                req.headers.authorization as string
            )
            console.log(tokenData)
            
            if(tokenData.role !== "ADMIN"){
                throw new Error ("Apenas administradores podem registrar bandas.")
            }

            const bandData = {
                name: req.body.name,
                musicGenre: req.body.musicGenre,
                responsible: req.body.responsible
            }

            const bandBusiness = new BandBusiness();
            await bandBusiness.register(
                bandData.name, 
                bandData.musicGenre, 
                bandData.responsible
            )
            res.status(200).send()

        } catch (error) {
            res.status(400).send({error: error.message});
        }
    }
}