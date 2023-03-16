import { Router } from 'express'
import {
    createProject,
    deleteProject,
    deteialProject,
    projectList,
    updateProject
} from './controller/controllerProjects'
import {
    deleteTaksByProject,
    getDetailTaskByProject, 
    getTasksByProjectId, 
    setCreateTaskByProject, 
    setUpdateTaksByProject
} from './controller/controllerTasks'





const rotas = Router()


rotas.get('/projetos', projectList)

rotas.get('/projetos/:id', deteialProject)

rotas.post('/projetos', createProject)

rotas.put('/projetos/:id', updateProject)

rotas.delete('/projetos/:id', deleteProject)

rotas.get('/tarefas/:project_id', getTasksByProjectId)

rotas.get('/tarefas/:project_id/:task_id', getDetailTaskByProject)

rotas.post('/tarefas/:project_id', setCreateTaskByProject)

rotas.put('/tarefas/:project_id/:task_id', setUpdateTaksByProject)

rotas.delete('/tarefas/:project_id/:task_id', deleteTaksByProject)

export default rotas