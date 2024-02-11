import {CreateUserService} from "../services/create.use.service.js"


class UserController{
  
  handle(req, res){
    const {body} = req
 
  try{
    const createUserService = new CreateUserService()
    return res.json(createUserService.execute(body));

  }catch(err){
    return res.status(400).json({
      error:err.message
    });
    }
  }
}

export {UserController}