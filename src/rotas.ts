import { Router } from 'express'
import {
    createProject,
    deleteProject,
    deteialProject,
    projectList,
    updateProject
} from './controller/controllerProjects'

const rotas = Router()


rotas.get('/projetos', projectList)

rotas.get('/projetos/:id', deteialProject)

rotas.post('/projetos', createProject)

rotas.put('/projetos/:id', updateProject)

rotas.delete('/projetos/:id', deleteProject)


export default rotas