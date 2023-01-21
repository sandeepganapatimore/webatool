import ScanModel from "./scanModel.mjs";

import { create as createScanDetails } from "../scanDetails/scanDetailService.mjs";
import analyzeUrl from "../utils/analyzeUrl.mjs";

async function getAll() {
  return await ScanModel.findAll();
}

async function getById(id) {
  return await ScanModel.findAll({
    where: {
      id: id,
    },
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

async function create(url) {
  const scanRow = await ScanModel.create({ url: url });
  const results = await analyzeUrl(url);
  const source = { scanId: scanRow?.id, results: results };
  await createScanDetails(source);
  return scanRow;
}

export { getAll, getById, remove, update, create };
