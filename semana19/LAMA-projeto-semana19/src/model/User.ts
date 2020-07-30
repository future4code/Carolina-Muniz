export class User{

    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string,
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

public static toUserModel(object: any): User{
    return new User(
        object.id,
        object.email,
        object.name,
        object.password,
    )
}

}

export interface UserInputDTO{
    email: string,
    name: string,
    password: string
}

export interface LoginInputDTO{
    email: string,
    password: string
}

