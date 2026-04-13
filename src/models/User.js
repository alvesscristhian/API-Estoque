import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // Valor padrão
        validate: { // Objeto de validação, herda métodos do validator
          len: { // Length
            args: [3, 255], // Argumentos
            msg: 'O campo deve ter entre 3 e 255 caracteres.', // Mensagem de erro
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', // Valor padrão
        unique: { // Se não for unico na base de dados mostra erro
          msg: 'E-mail já cadastrado.',
        },
        validate: {
          isEmail: { // E-mail inválido? Mostra erro
            msg: 'E-mail inválido.',
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          tyoe: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [8, 50],
              msg: 'Senha precisa ter entre 8 e 50 caracteres',
            },
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => { // Antes de salvar na base de dados, faça:
      if (user.password) {
        user.password_hash = bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  validaSenha(password) { // A senha bate com o hash?
    return bcrypt.compare(password, this.password_hash);
  }
}
