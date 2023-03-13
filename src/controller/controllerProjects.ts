import { Request, Response } from "express";
import { knex } from "../services/connection";
import { Project } from "../types";

export const projectList = async(_: Request, res: Response)=>{
    try {
        const projects = await knex('project')

        return res.status(200).json(projects)
    } catch{
        res.status(500).json({mensage:'erro no servidor!'})
    }
}

export const deteialProject =async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const project = await knex<Project>('project').where({id: Number(id)}).first()

        if(!project){
            res.status(404).json({mensage:'Projeto não existe!'})
        }

        return res.status(200).json(project)
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}

export const createProject =async (req: Request, res: Response) => {
    try {
        
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}


export const updateProject =async (req: Request, res: Response) => {
    try {
        
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}

export const deleteProject =async (req: Request, res: Response) => {
    try {
        
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}