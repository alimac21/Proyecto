import { Response, Request } from "express";
import { User } from "../entities/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, personId } = req.body;

    const user = new User();
    user.email = email;
    user.password = password;
    user.person = personId;

    await user.save();  

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    if (user.length === 0) {
      throw Error();
    }
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOneBy({ id: parseInt(req.params.id) });
  console.log(user);

  if (!user) return res.status(404).json({ message: "user does not exists" });

  await User.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};





/*import { error } from "console";
import { Request,Response } from "express";
import { User,} from "../entities/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const {email, password, active} = req.body
    
    const user = new User()
    user.email = email;
    user.password = password;
    user.active = active

    await user.save()

    return res.json(user)
  } catch (error){
    if (error instanceof Error){ 
        return res.status(500).json({message: error.message});
    }
  }

}

export const getUsers = async (req: Request, res: Response) => {
  try {
    
     const users = await User.find()
  return res.json(users) 
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({mesagge: error.message})
    }
  }
  
 
}

export const UpdateUser = async (req: Request, res: Response) => {
try{
  const {id} = req.params

  const user = await User.findOneBy({id: parseInt (req.params.id)});
  
if (!user) return res.status(404).json ({message: 'usuario no existe'});

  await User.update({id: parseInt(id) }, req.body)

  return res.sendStatus(204)
} catch (error){
  if (error instanceof Error){
    return res.status(500).json({message: error.message});
  }
}
};


export const deleteUser = async (req: Request, res: Response) =>{
try{
  const{id} = req.params

const result = await User.delete({id: parseInt(id)})
if(result.affected === 0){
  return res.status(404).json({message:"usuario no existe"})
}
return res.status(204)
} catch{
  if(error instanceof Error){
    return res.status(500).json({message: error.message})
  }
}
}

export const getUser = async (req: Request, res: Response) => {
try{
  const {id} = req.params
const user = await User.findOneBy({id: parseInt(id)})
return res.json(user)
}catch(error){
  if(error instanceof Error){
    return res.status(500).json({message: error.message})
  }
}
}*/
