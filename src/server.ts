import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import sequelize from './config/database.js';
import './models/alien.model.js';
import alienRoutes from './routes/alien.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(alienRoutes);

const PORT = Number(process.env.PORT) || 3000;

try {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('Erro ao iniciar a aplicação:', error);
}
