import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Verificamos si las variables de entorno están definidas y asignamos valores predeterminados si no lo están
const dbUser = process.env.DB_USER ?? "defaultUser";
const dbPassword = process.env.DB_PASSWORD ?? "defaultPassword";
const dbHost = process.env.DB_HOST ?? "localhost";
const dbName = process.env.DB_NAME ?? "defaultDBName";
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

// Configuración de Sequelize para PostgreSQL
const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true'
    }
  }
);

export default sequelize;

