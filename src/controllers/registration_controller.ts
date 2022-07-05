

class RegistrationController {

  constructor() {}
 
  async register(req: any, res: any) {
    res.send("/api/v1/register");
  }

}


export default RegistrationController;