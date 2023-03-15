import { Request, Response } from "express";
import { knex } from "../services/connection";
import { Project, Taks } from "../types/types";

export const getTasksByProjectId = async (req: Request, res: Response)=>{
    const {project_id} = req.params
    try {
        const taks = await knex<Taks>('tasks').select('*')
        .where('project_id', project_id)

        if(!taks){
          return res.status(404)
          .json({message: "não foi entrada nenhuma tarefa para o projeto!"})
        }

        return res.status(200).json(taks)

    } catch (error){
      console.log(error)
      return res.status(500).json({message: "Erro no servidor!"})  
    }
}
/* 
export const detailTaksProject = (req: Request, res: Response)=>{
    try {
        
    } catch {
      return res.status(500).json({message: "Erro no servidor!"})  
    }
}

export const createTaksProject = (req: Request, res: Response)=>{
    try {
        
    } catch {
      return res.status(500).json({message: "Erro no servidor!"})  
    }
}

export const editTaksProject = (req: Request, res: Response)=>{
    try {
        
    } catch {
      return res.status(500).json({message: "Erro no servidor!"})  
    }
}

export const deleteTaksProject = (req: Request, res: Response)=>{
    try {
        
    } catch {
      return res.status(500).json({message: "Erro no servidor!"})  
    }
} */