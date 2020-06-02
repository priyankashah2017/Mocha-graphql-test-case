import dotenv from 'dotenv';
import { EmployeeModel } from '../../models';

if (process.env.ENV) {
  dotenv.config({ path: `./../../47timeSheet.env` });
}

export const googleClientKey = () => {
  return async (_, args, ctx) => {
    console.log(" google ----->", process.env.secret_key);
    return { clientKey: process.env.secret_key, hostedDomain: '47billion.com' }
  }
}

export const getEmpToken = () => {
  return async (_, args, ctx) => {
    try {
      let useremail = args.email;
      console.log("arguments are ----->", useremail)
      let empDetails = await EmployeeModel.findOne({ where: { email: useremail } });
      if (!empDetails) {
        throw new Error("No Email Found")
      }
      console.log("employee---->", empDetails.dataValues)
      return empDetails;
    }
    catch (e) {
      console.log(`Error occured while generating employee token -> ${e.toString()}`);
      throw new Error(e);
    }
  }
}


export const getUser = () => {
  return async (_, args, ctx) => {
    console.log("Get User ----->", args.id);

    let user = {};
    if (args.id == 3) {
      user.id = 3;
      user.name = "Test";
      user.email = 'test@gmail.com';
    }
    else {
      user = null;
    }
    console.log("------>", user);
    return user
  }
}
