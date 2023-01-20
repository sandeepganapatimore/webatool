import { create, getAll, getById, remove, update } from "./scanService.mjs";

async function getScans(req, res) {
  const result = await getAll();
  res.send(result);
}

async function createScans(req, res) {
  const result = await create(req?.body?.url);
  res.status(201).send(result);
}

async function removeScans(req, res) {
  await remove(req.params.id);
  res.sendStatus(204);
}

async function updateScans(req, res) {
  const result = await update(req.params.id, req?.body?.url);
  res.send(result);
}

async function getScansById(req, res) {
  const result = await getById(req.params.id);
  res.send(result);
}
export { getScans, createScans, removeScans, updateScans, getScansById };
