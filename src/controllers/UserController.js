class UserController {
  async index(req, res) {
    return res.json('Users');
  }
}

export default new UserController();
