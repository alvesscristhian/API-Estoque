import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      // Log do erro real para o desenvolvedor ver no terminal
      console.error(e);

      // Retorna um erro de servidor genérico para não expor detalhes sensíveis
      return res.status(500).json({
        errors: 'Ocorreu um erro interno ao buscar os usuários.',
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error(e);

      return res.status(500).json({
        errors: ['Erro ao buscar usuário.'],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const newInfos = await user.update(req.body);
      const { id, nome, email } = newInfos;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error(e);

      return res.status(500).json({
        errors: ['Erro ao atualizar usuário.'],
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();
      return res.status(200).json(null);
    } catch (e) {
      console.error(e);

      return res.status(500).json({
        errors: ['Erro ao excluir usuário.'],
      });
    }
  }
}

export default new UserController();
