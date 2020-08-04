import express, { Request, Response } from "express";
import { Authenticator } from "../service/Authenticator";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";


export class BandController {
    public async register (req: express.Request, res: express.Response) {
        try {
            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(
                req.headers.authorization as string
            )
            
            if(verifiedToken.role !== "ADMIN"){
                throw new Error ("Apenas administradores podem registrar bandas.")
            }

            const bandData: BandInputDTO = {
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
            res.status(200).send("Banda cadastrada com sucesso.")

        } catch (error) {
            res.status(400).send({error: error.message});
        }
    }

    public async info (req: express.Request, res: express.Response){
        try {

            const token = req.headers.authorization as string; 

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token)

            const input = {
                id: verifiedToken.id
            }

            const bandBusiness = new BandBusiness();
            const infoBand = await bandBusiness.info(input);

            res.status(200).send(infoBand)
           
        } catch (error) {
            res.status(400).send({error: error.message});
        }
       
    }
}