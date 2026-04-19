import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          errors: ['Dados inválidos.'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe.'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida.'],
        });
      }

      const { id } = user;
      // Recebe os dados (payload), Usa uma chave secreta (secret), Define opções (opcional)
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (e) {
      console.error(e);

      return res.status(500).json({
        errors: ['Erro interno no servidor.'],
      });
    }
  }
}

export default new TokenController();
