import express from 'express'
import { addNote, deleteNote, getNoteById, getNotes, getQueryNotes, updateNote } from '../controllers/note-controllers.ts'


const noteRouter = express.Router()


noteRouter.get('/api/v1/all-notes', getNotes)

noteRouter.get('/api/v1/notes', getQueryNotes)

noteRouter.get('/api/v1/all-notes/:id', getNoteById)

noteRouter.post('/api/v1/note', addNote)

noteRouter.put('/api/v1/note/:id', updateNote)

noteRouter.delete('/api/v1/note/:id', deleteNote)

export default noteRouter