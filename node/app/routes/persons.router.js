const express = require('express');

const PersonService = require('./../services/person.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createPersonSchema, updatePersonSchema, getPersonSchema } = require('./../schemas/person.schema');

const router = express.Router();
const service = new PersonService();

router.get('/', async (req, res, next) => {
  try {
    const persons = await service.find();
    res.json(persons);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getPersonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPersonSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPersonSchema, 'params'),
  validatorHandler(updatePersonSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPersonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
