// src/server/index.ts
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sequelize from './config/database.js';
import Pet from './models/pet.js';
import petsRouter from './routes/pets.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Use the pets router
app.use('/api/pets', petsRouter);

// Initialize database and add some dummy data
const initDb = async () => {
  try {
    await sequelize.sync({ force: true }); // This will recreate tables - remove force:true in production!
    
    // Add some dummy data
    await Pet.bulkCreate([
      {
        name: "Phoenix",
        species: "Magical Bird",
        description: "A majestic bird that rises from its own ashes",
        rarity: "Legendary"
      },
      {
        name: "Unicorn",
        species: "Magical Horse",
        description: "A beautiful horse with a single horn",
        rarity: "Rare"
      },
      {
        name: "Dragon",
        species: "Flying Reptile",
        description: "A powerful creature that breathes fire",
        rarity: "Epic"
      }
    ]);

    console.log('Database initialized!');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

// Initialize database when server starts
initDb();

// Production static file serving
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});