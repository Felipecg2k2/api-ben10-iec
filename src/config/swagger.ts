import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ben 10 API',
      version: '1.0.0',
      description: 'API RESTful para catálogo de aliens do Ben 10',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './dist/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;