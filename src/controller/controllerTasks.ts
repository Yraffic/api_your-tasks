import { Request, Response } from "express";
import { knex } from "../services/connection";
import { Task, Project } from "../types/types";

export const getTasksByProjectId = async (req: Request, res: Response) => {
  const { project_id } = req.params
  try {
    const project = await knex<Project>('project')
      .where({ id: Number(project_id) })
      .first()

    if (!project) {
      res.status(404).json({ message: 'Projeto não existe!' })
    }

    const task = await knex<Task>('tasks').select('*')
      .where('project_id', project_id)

    if (!task) {
      return res.status(404)
        .json({ message: "não foi entrada nenhuma tarefa para o projeto!" })
    }

    return res.status(200).json(task)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro no servidor!" })
  }
}
export const getDetailTaskByProject = async (req: Request, res: Response) => {
  const { task_id, project_id } = req.params
  try {
    const project = await knex<Project>('project')
      .where({ id: Number(project_id) })
      .first()

    if (!project) {
      res.status(404).json({ message: 'Projeto não existe!' })
    }

    const task = await knex<Task>('tasks').select('*')
      .where({ task_id: task_id }).andWhere({ project_id: project_id })

    if (!task) {
      return res.status(404)
        .json({ message: "não foi entrada nenhuma tarefa para o projeto!" })
    }

    return res.status(200).json(task)

  } catch {
    return res.status(500).json({ message: "Erro no servidor!" })
  }
}

export const setCreateTaskByProject = async (req: Request, res: Response) => {
  const { project_id } = req.params
  const {
    task_id,
    description,
    date_close
  } = req.body

  try {
    const project = await knex<Project>('project')
      .where({ id: Number(project_id) })
      .first()

    if (!project) {
      res.status(404).json({ message: 'Projeto não existe!' })
    }

    const task = await knex<Task>('tasks').insert({
      task_id,
      description,
      date_close,
      project_id: project_id
    }).returning('*')

    return res.status(201).json(task)
  } catch {
    return res.status(500).json({ message: "Erro no servidor!" })
  }
}


export const setUpdateTaksByProject = async (req: Request, res: Response) => {
  const { task_id, project_id } = req.params
  const {
    description,
    date_close
  } = req.body
  try {
    const project = await knex<Project>('project')
      .where({ id: Number(project_id) })
      .first()

    if (!project) {
      res.status(404).json({ message: 'Projeto não existe!' })
    }

    const task = await knex<Task>('tasks').select('*')
      .where({ task_id: task_id }).andWhere({ project_id: project_id })

    if (!task) {
      return res.status(404)
        .json({ message: "não foi entrada nenhuma tarefa para o projeto!" })
    }

    await knex<Task>('tasks').update({
      description,
      date_close
    }).where({ project_id: project_id })
      .andWhere({ task_id: task_id })

    return res.status(204).json({ message: 'projeto atualizado!' })

  } catch {
    return res.status(500).json({ message: "Erro no servidor!" })
  }
}

export const deleteTaksByProject = async (req: Request, res: Response) => {
  const { task_id, project_id } = req.params
  try {
    const project = await knex<Project>('project')
      .where({ id: Number(project_id) })
      .first()

    if (!project) {
      res.status(404).json({ message: 'Projeto não existe!' })
    }

    const task = await knex<Task>('tasks').select('*')
      .where({ task_id: task_id }).andWhere({ project_id: project_id })

    if (!task) {
      return res.status(404)
        .json({ message: "não foi entrada nenhuma tarefa para o projeto!" })
    }

    await knex<Task>('tasks')
      .where({task_id: task_id, project_id: project_id}).del()

    return res.status(204).send()
  } catch {
    return res.status(500).json({ message: "Erro no servidor!" })
  }
} 