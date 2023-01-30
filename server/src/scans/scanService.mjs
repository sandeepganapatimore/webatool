import ScanModel from "./scanModel.mjs";

async function getAll() {
  return await ScanModel.findAll();
}

async function getById(id) {
  return await ScanModel.findByPk(Number(id), {
    include: ["ScanDetails"],
  });
}

async function remove(id) {
  return await ScanModel.destroy({
    where: {
      id: id,
    },
  });
}

async function update(id, url) {
  return await ScanModel.update(
    { url: url },
    {
      where: {
        id: id,
      },
    }
  );
}

async function create(url, trans) {
  return await ScanModel.create({ url: url }, { transaction: trans });
}

export { getAll, getById, remove, update, create };
