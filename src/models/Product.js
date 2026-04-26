import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 255],
            msg: 'O campo deve ter entre 0 e 255 caracteres.',
          },
        },
      },
      model: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo deve ter entre 3 e 255 caracteres.',
          },
        },
        set(value) {
          this.setDataValue('color', value ? value.trim().toLowerCase() : '');
        },
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'O campo deve ser um número inteiro.',
          },
        },
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 50],
            msg: 'O campo deve ter entre 0 e 50 caracteres.',
          },
        },
        set(value) {
          this.setDataValue('color', value ? value.trim().toLowerCase() : '');
        },
      },
    }, {
      sequelize,
    });
  }
}
