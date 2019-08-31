const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let numberOfRequests = 0;

server.use((req, res, next) => {
  console.time("Request");

  numberOfRequests += 1;
  console.log(`Number of requests: ${numberOfRequests}`);

  next();

  console.timeEnd("Request");
});

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(proj => proj.id == id);

  if (!project) {
    return res.status(404).json({ error: "Project does not exists!" });
  }

  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = projects.find(proj => proj.id == id);

  if (project) {
    return res.status(404).json({ error: "Duplicate project id!" });
  }

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(proj => proj.id == id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(proj => proj.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const title = req.body.title;

  const project = projects.find(proj => proj.id == id);

  project.tasks.push(title);

  return res.json(projects);
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000.");
});
