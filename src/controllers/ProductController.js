import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      const {
        id, name, description, model, color,
      } = newProduct;
      return res.json({
        id, name, description, model, color,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ errors: 'Erro ao buscar produtos.' });
    }
  }
}

export default new ProductController();
