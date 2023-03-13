import { Router } from 'express'
import { 
        deteialProject, 
        projectList 
        
    } from './controller/controllerProjects'

const rotas = Router()

//listar projetos
rotas.get('/projetos', projectList)
//detalhar projeto
rotas.get('/projetos/:id', deteialProject)


export default rotas