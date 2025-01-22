import express from 'express';
import Pet from '../models/pet.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
});

export default router;