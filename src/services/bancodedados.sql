create table project (
	id serial primary key,
 	name text not null,
  description text,
  createdAt timestamp null default current_timestamp
)

CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY,
  description TEXT,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  date_close DATE,
  project_id INTEGER NOT NULL REFERENCES project(id)
);
