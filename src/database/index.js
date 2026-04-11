import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Foto from '../models/Foto';

const models = [Foto]; // Armazena todos os models em um Array

const connection = new Sequelize(databaseConfig); // Instância de um Sequelize com configs do banco

models.forEach((model) => model.init(connection));
// Checa se nos models tem a static function de associar tabelas e executa a function
