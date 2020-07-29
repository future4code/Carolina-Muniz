# Respostas - exercícios Aula 65
##### Exercício 1
a) 
```
public async getById(id: string){
    const user = await this.userDatabase.getUserById(id);

    if(!user){
      throw new NotFoundError("User not found");
    }
    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }
  }
 ```

 ##### Exercício 2
a) 
```
describe('Testing UserBusiness.getById', () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test('Deve retornar "User not found" quando usuário não existir', async()=>{
        expect.assertions(2);
        try {
            const getUserById = jest.fn();

            userDatabase = {getUserById}

            const userBusiness = new UserBusiness (
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            )

            await userBusiness.getById("Invalid id")
        } catch (error) {
            expect(error.errorCode).toBe(404);
            expect(error.message).toBe("User not found");
        }
    })
})
```

b) 
```
test("Deve retornar o 'id' quando o usuário existir", async () => {
        expect.assertions(2);
        
        const getUserById = jest.fn(
          (id: string) =>
            new User(
              "id",
              "Carol",
              "carol@carol.com",
              "password",
              stringToUserRole("ADMIN")
            )
        );
    
        userDatabase = { getUserById };
    
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
    
        const user = await userBusiness.getById("id");
    
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
          id: "id",
          name: "Carol",
          email: "carol@carol.com",
          role: UserRole.ADMIN,
        });
      });
```

##### Exercício 3
a) 
```
  public async gelAll(role: UserRole) {
    if(stringToUserRole(role) !== UserRole.ADMIN) {
      throw new Error("Acesso permitido somente para administradores")
    }  

    const allUsers = await this.userDatabase.getAllUsers();

    return allUsers.map((user) => {
      id: user.getId()
      name: user.getName()
      email: user.getEmail()
      role: user.getRole()

    })
  }
```




