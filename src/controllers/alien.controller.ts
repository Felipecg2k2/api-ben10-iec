import { Request, Response } from 'express';
import Alien from '../models/alien.model.js';

const validarId = (idParam: string | string[]): number | null => {
  if (Array.isArray(idParam)) {
    return null;
  }

  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
};

// GET /aliens
export const listarAliens = async (_req: Request, res: Response) => {
  try {
    const aliens = await Alien.findAll();

    return res.status(200).json(aliens);
  } catch {
    return res.status(500).json({
      mensagem: 'Erro ao buscar aliens.',
    });
  }
};

// GET /aliens/:id
export const buscarAlienPorId = async (req: Request, res: Response) => {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        mensagem: 'O id deve ser um número inteiro positivo.',
      });
    }

    const alien = await Alien.findByPk(id);

    if (!alien) {
      return res.status(404).json({
        mensagem: 'Alien não encontrado.',
      });
    }

    return res.status(200).json(alien);
  } catch {
    return res.status(500).json({
      mensagem: 'Erro ao buscar alien.',
    });
  }
};

// POST /aliens
export const criarAlien = async (req: Request, res: Response) => {
  try {
    const {
      nome,
      especie,
      planeta,
      poderPrincipal,
      nivelPoder,
      disponivelOmnitrix,
    } = req.body;

    if (
      !nome ||
      !especie ||
      !planeta ||
      !poderPrincipal ||
      nivelPoder === undefined ||
      disponivelOmnitrix === undefined
    ) {
      return res.status(400).json({
        mensagem: 'Todos os campos são obrigatórios.',
      });
    }

    if (
      typeof nome !== 'string' ||
      typeof especie !== 'string' ||
      typeof planeta !== 'string' ||
      typeof poderPrincipal !== 'string'
    ) {
      return res.status(400).json({
        mensagem: 'Os campos de texto devem ser strings.',
      });
    }

    if (
      typeof nivelPoder !== 'number' ||
      !Number.isInteger(nivelPoder) ||
      nivelPoder < 1 ||
      nivelPoder > 10
    ) {
      return res.status(400).json({
        mensagem: 'O nivelPoder deve ser um número inteiro entre 1 e 10.',
      });
    }

    if (typeof disponivelOmnitrix !== 'boolean') {
      return res.status(400).json({
        mensagem: 'disponivelOmnitrix deve ser booleano.',
      });
    }

    const alien = await Alien.create({
      nome,
      especie,
      planeta,
      poderPrincipal,
      nivelPoder,
      disponivelOmnitrix,
    });

    return res.status(201).json(alien);
  } catch (error) {
    return res.status(400).json({
      mensagem: error instanceof Error ? error.message : 'Erro ao criar alien.',
    });
  }
};

// PUT /aliens/:id
export const atualizarAlien = async (req: Request, res: Response) => {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        mensagem: 'O id deve ser um número inteiro positivo.',
      });
    }

    const alien = await Alien.findByPk(id);

    if (!alien) {
      return res.status(404).json({
        mensagem: 'Alien não encontrado.',
      });
    }

    const {
      nome,
      especie,
      planeta,
      poderPrincipal,
      nivelPoder,
      disponivelOmnitrix,
    } = req.body;

    if (
      !nome ||
      !especie ||
      !planeta ||
      !poderPrincipal ||
      nivelPoder === undefined ||
      disponivelOmnitrix === undefined
    ) {
      return res.status(400).json({
        mensagem: 'Todos os campos são obrigatórios.',
      });
    }

    if (
      typeof nome !== 'string' ||
      typeof especie !== 'string' ||
      typeof planeta !== 'string' ||
      typeof poderPrincipal !== 'string'
    ) {
      return res.status(400).json({
        mensagem: 'Os campos de texto devem ser strings.',
      });
    }

    if (
      typeof nivelPoder !== 'number' ||
      !Number.isInteger(nivelPoder) ||
      nivelPoder < 1 ||
      nivelPoder > 10
    ) {
      return res.status(400).json({
        mensagem: 'O nivelPoder deve ser um número inteiro entre 1 e 10.',
      });
    }

    if (typeof disponivelOmnitrix !== 'boolean') {
      return res.status(400).json({
        mensagem: 'disponivelOmnitrix deve ser booleano.',
      });
    }

    await alien.update({
      nome,
      especie,
      planeta,
      poderPrincipal,
      nivelPoder,
      disponivelOmnitrix,
    });

    return res.status(200).json(alien);
  } catch (error) {
    return res.status(400).json({
      mensagem:
        error instanceof Error ? error.message : 'Erro ao atualizar alien.',
    });
  }
};

// DELETE /aliens/:id
export const excluirAlien = async (req: Request, res: Response) => {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        mensagem: 'O id deve ser um número inteiro positivo.',
      });
    }

    const alien = await Alien.findByPk(id);

    if (!alien) {
      return res.status(404).json({
        mensagem: 'Alien não encontrado.',
      });
    }

    await alien.destroy();

    return res.status(204).send();
  } catch {
    return res.status(500).json({
      mensagem: 'Erro ao excluir alien.',
    });
  }
};
