class ProductController {
  async index(req, res) {
    return res.json('Index');
  }
}

export default new ProductController();
