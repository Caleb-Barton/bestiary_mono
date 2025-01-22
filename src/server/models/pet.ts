import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

interface PetAttributes {
  id?: number;
  name: string;
  species: string;
  description: string;
  rarity: string;
}

class Pet extends Model<PetAttributes> implements PetAttributes {
  public id!: number;
  public name!: string;
  public species!: string;
  public description!: string;
  public rarity!: string;
}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Pet',
  }
);

export default Pet;