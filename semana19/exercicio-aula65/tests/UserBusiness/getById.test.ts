import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";


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
})

  
 
