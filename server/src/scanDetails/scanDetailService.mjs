import scanDetailModel from "./scanDetailModel.mjs";

async function update(id, results) {
  return await scanDetailModel.update(
    { results: results },
    {
      where: { id: id },
    }
  );
}

async function remove(scanId) {
  return await scanDetailModel.destroy({
    where: {
      ScanId: scanId,
    },
  });
}

async function create(source) {
  // here we get the parameter value as
  // the source which is passed from the scanController module
  return await scanDetailModel.create({
    ScanId: source.scanId,
    results: source.results,
  });
}

async function getByScanId(scanId) {
  return await scanDetailModel.findAll({
    where: {
      ScanId: scanId,
    },
  });
}

export { update, remove, create, getByScanId };

/* Region not need now

// async function getAll() {
//   return await scanDetailModel.findAll();
// }

// async function getById(id) {
//   return await scanDetailModel.findAll({
//     where: {
//       id: id,
//     },
//   });
// }
*/
