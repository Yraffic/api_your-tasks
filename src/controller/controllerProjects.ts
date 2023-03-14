import { Request, Response } from "express";
import { knex } from "../services/connection";
import { Project } from "../types/types";

export const projectList = async(_: Request, res: Response)=>{
    try {
        const projects = await knex('project')

        return res.status(200).json(projects)
    } catch{
        res.status(500).json({mensage:'erro no servidor!'})
    }
}

export const deteialProject = async (req: Request, res: Response) => {
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

export const createProject = async (req: Request, res: Response) => {
    const {name, description} = req.body

    try {
        const project = await knex<Project>('project').insert({
            name,
            description
        }).returning('*')

        return res.status(201).json(project)
    } catch (error){
        console.log(error)
        res.status(500).json({mensage:'erro no servidor!'})
    }
}


export const updateProject = async (req: Request, res: Response) => {
    const {id} = req.params
    const {name, description} = req.body
    console.log('UPDATE')
    try {

        const project = await knex<Project>('project').where({id: Number(id)}).first()

        if(!project){
            res.status(404).json({mensage:'Projeto não existe!'})
        }


        await knex<Project>('project').where({id: Number(id)}).update({
            name,
            description
        })

        return res.status(204).json({mensagem: 'projeto atualizado!'})
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}

export const deleteProject =async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const carro = await knex<Project>('project')
            .where({ id: Number(id) })
            .first()

        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' })
        }

        await knex('project').where({id: Number(id)}).del()

        return res.status(204).send()
    } catch {
        res.status(500).json({mensage:'erro no servidor!'})
    }
}