import UserRepository from "../repositories/user.repository.js"

class CreateUserService{

  execute(user){

    if(!user.username){
      throw new Error("username é obrigatório");
    }
    const userRepository =  UserRepository;
    
    const existUser = userRepository.findByUsername(user.username);


    if(existUser) {
      throw new Error("Usuario ja existe");
    } 
      return userRepository.save(user);
  }

}

export {CreateUserService}