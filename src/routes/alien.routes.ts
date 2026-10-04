import { Router } from 'express';

import {
  listarAliens,
  buscarAlienPorId,
  criarAlien,
  atualizarAlien,
  excluirAlien,
} from '../controllers/alien.controller.js';

const router: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     AlienInput:
 *       type: object
 *       required:
 *         - nome
 *         - especie
 *         - planeta
 *         - poderPrincipal
 *         - nivelPoder
 *         - disponivelOmnitrix
 *       properties:
 *         nome:
 *           type: string
 *           example: XLR8
 *         especie:
 *           type: string
 *           example: Kineceleran
 *         planeta:
 *           type: string
 *           example: Kinet
 *         poderPrincipal:
 *           type: string
 *           example: Super velocidade
 *         nivelPoder:
 *           type: integer
 *           minimum: 1
 *           maximum: 10
 *           example: 9
 *         disponivelOmnitrix:
 *           type: boolean
 *           example: true
 *
 *     Alien:
 *       allOf:
 *         - $ref: '#/components/schemas/AlienInput'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             createdAt:
 *               type: string
 *               format: date-time
 *             updatedAt:
 *               type: string
 *               format: date-time
 */

/**
 * @swagger
 * /aliens:
 *   get:
 *     summary: Lista todos os aliens
 *     tags:
 *       - Aliens
 *     responses:
 *       200:
 *         description: Lista de aliens retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alien'
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/aliens', listarAliens);

/**
 * @swagger
 * /aliens/{id}:
 *   get:
 *     summary: Busca um alien pelo ID
 *     tags:
 *       - Aliens
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico positivo do alien
 *         schema:
 *           type: integer
 *           minimum: 1
 *         example: 1
 *     responses:
 *       200:
 *         description: Alien encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alien'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Alien não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/aliens/:id', buscarAlienPorId);

/**
 * @swagger
 * /aliens:
 *   post:
 *     summary: Cadastra um novo alien
 *     tags:
 *       - Aliens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlienInput'
 *     responses:
 *       201:
 *         description: Alien criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alien'
 *       400:
 *         description: Dados inválidos
 */
router.post('/aliens', criarAlien);

/**
 * @swagger
 * /aliens/{id}:
 *   put:
 *     summary: Atualiza um alien
 *     tags:
 *       - Aliens
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico positivo do alien
 *         schema:
 *           type: integer
 *           minimum: 1
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlienInput'
 *     responses:
 *       200:
 *         description: Alien atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alien'
 *       400:
 *         description: ID ou dados inválidos
 *       404:
 *         description: Alien não encontrado
 */
router.put('/aliens/:id', atualizarAlien);

/**
 * @swagger
 * /aliens/{id}:
 *   delete:
 *     summary: Exclui um alien
 *     tags:
 *       - Aliens
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico positivo do alien
 *         schema:
 *           type: integer
 *           minimum: 1
 *         example: 1
 *     responses:
 *       204:
 *         description: Alien excluído com sucesso
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Alien não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/aliens/:id', excluirAlien);

export default router;
