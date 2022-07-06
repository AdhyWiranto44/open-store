import { StatusCodes } from "http-status-codes";
import ApiService from "../services/api_service";
import UserService from "../services/user_service";


class RegistrationController {

  constructor() {}
 
  async register(req: any, res: any) {
    try {
      const registered = await new UserService().create(req);

      return new ApiService(
        res, StatusCodes.OK, true,
        "New user successfully registered.",
        {
          "user": registered
        }
      ).sendResponse();
    } catch (err: any) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

}


export default RegistrationController;