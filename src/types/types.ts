export type Project = {
    id: string | number,
    name: string,
    description: string,
    createdAt: Date
}

export type Task = {
    task_id: string | number,
    description: string,
    date_close: string,
    project_id: string | number
}