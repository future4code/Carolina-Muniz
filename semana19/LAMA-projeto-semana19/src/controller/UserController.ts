import express, { Request, Response } from "express";
import HashManager from "../service/HashManager";
import { Authenticator } from "../service/Authenticator";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController{
    
    public async signup (req: express.Request, res: express.Response){
        try {
            const userData: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(userData.password)

            const userBusiness = new UserBusiness();
            const userId = await userBusiness.signup(
                userData.name,
                userData.email,
                hashPassword
            )

            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({id: userId})

            res.status(200).send({token: accessToken});
        } catch (error) {
            res.status(400).send({error: error.message});
        }
    }
}