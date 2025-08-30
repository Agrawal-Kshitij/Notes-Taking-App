import express from 'express';
import { getAllNotes, createNote } from '../controllers/notesController.js';

const router = express.Router();
router.get("/", getAllNotes);
router.post('/', createNote);
//   app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"successfully created a note"});
//   });

export default router;