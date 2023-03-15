import { Router } from 'express'
import {
    createProject,
    deleteProject,
    deteialProject,
    projectList,
    updateProject
} from './controller/controllerProjects'
import {
    getTasksByProjectId
} from './controller/controllerTasks'

const rotas = Router()


rotas.get('/projetos', projectList)

rotas.get('/projetos/:id', deteialProject)

rotas.post('/projetos', createProject)

rotas.put('/projetos/:id', updateProject)

rotas.delete('/projetos/:id', deleteProject)

rotas.get('/tarefas/:project_id', getTasksByProjectId)

export default rotas