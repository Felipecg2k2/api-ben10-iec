import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

export interface AlienAttributes {
  id: number;
  nome: string;
  especie: string;
  planeta: string;
  poderPrincipal: string;
  nivelPoder: number;
  disponivelOmnitrix: boolean;
}

export interface AlienCreationAttributes {
  nome: string;
  especie: string;
  planeta: string;
  poderPrincipal: string;
  nivelPoder: number;
  disponivelOmnitrix: boolean;
}

class Alien extends Model<AlienAttributes, AlienCreationAttributes> {
  declare id: number;
  declare nome: string;
  declare especie: string;
  declare planeta: string;
  declare poderPrincipal: string;
  declare nivelPoder: number;
  declare disponivelOmnitrix: boolean;

  declare createdAt: Date;
  declare updatedAt: Date;
}

Alien.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    especie: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    planeta: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    poderPrincipal: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nivelPoder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },

    disponivelOmnitrix: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'aliens',
  }
);

export default Alien;
