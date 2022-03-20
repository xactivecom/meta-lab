import { Router } from 'express';

const wsRouter = Router();

// Collection of todos
const todoList = [];
let todoIdx = 0;

// export function metaServerWs(): string {
//   return 'meta-server-ws';
// }

wsRouter.get('/todos', async (req, res) => {
  console.log(`get todos`);
  return res.json(todoList);
});

wsRouter.post('/todos', async (req, res) => {
  const todo = req.body;
  console.log(`add todo ${JSON.stringify(todo, null, 2)}`);
  todo.id = ++todoIdx;
  todoList.push(todo);
  return res.json(todo);
});

// wsRouter.delete('/api/todos/:id', async (req, res) => {
//   const id = req.params.id;
//   console.log(`delete id ${id}`);
//   return res.json({ status: 'OK' });
// });

export default wsRouter;
