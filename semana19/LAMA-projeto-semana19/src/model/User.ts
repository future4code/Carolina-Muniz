import { USER_ROLES } from "../service/Authenticator";

export class User{

    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string,
        private role: USER_ROLES
    ) {}


    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getName(){
        return this.name
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }

    setId(id: string){
        this.id = id;
    }

    setEmail(email: string){
        this.email = email;
    }

    setName(name: string){
        this.name = name;
    }

    setPassword(password: string){
        this.password = password;
    }

    setRole(role: USER_ROLES){
        this.role = role
    }

public static toUserModel(object: any): User{
    return new User(
        object.id,
        object.email,
        object.name,
        object.password,
        object.role
    )
}

}

export interface UserInputDTO{
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
}

export interface LoginInputDTO{
    email: string,
    password: string,
    role: USER_ROLES
}

