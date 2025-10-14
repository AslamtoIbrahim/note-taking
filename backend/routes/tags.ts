import express from "express"
import { addTag, deleteTag, getTags } from "../controllers/tag-controllers"

const tagsRouter = express.Router()

tagsRouter.get('/api/v1/tags', getTags)

tagsRouter.put('/api/v1/tag', addTag)

tagsRouter.delete('/api/v1/tags/:id', deleteTag)

export default tagsRouter