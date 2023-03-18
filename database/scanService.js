import { scanModel } from "./scanModel.js";
// These are functions.
async function getAll() {
  try {
    const result = await scanModel.findAll();
    return result;
  } catch (err) {
    throw err;
  }
}

function getById() {}

function update() {}

function remove() {}

function create() {}

export { getAll, getById, update, remove, create };
