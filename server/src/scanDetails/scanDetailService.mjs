import scanDetailModel from "./scanDetailModel.mjs";

async function getAll() {
  return await scanDetailModel.findAll();
}

async function getById(id) {
  return await scanDetailModel.findAll({
    where: {
      id: id,
    },
  });
}

async function update(id, results) {
  return await scanDetailModel.update(
    { results: results },
    {
      where: { id: id },
    }
  );
}

async function remove(id) {
  return await scanDetailModel.destroy({
    where: {
      id: id,
    },
  });
}

async function create(source) {
  return await scanDetailModel.create({
    ScanId: source.scanId,
    results: source.results,
  });
}

export { getAll, getById, update, remove, create };
