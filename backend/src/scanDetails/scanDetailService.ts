import scanDetailModel from "./scanDetailModel";

class ScanDetailService {
  async update(id:Number, results:any) {
    return await scanDetailModel.update(
      { results: results },
      {
        where: { id: id },
      }
    );
  }

  async remove(scanId:any) {
    return await scanDetailModel.destroy({
      where: {
        ScanId: scanId,
      },
    });
  }

  async create(source:any, trans:any) {
    // here we get the parameter value as
    // the source which is passed from the scanController module
    return await scanDetailModel.create(
      {
        ScanId: source.scanId,
        results: source.results,
      },
      { transaction: trans }
    );
  }

  async getByScanId(scanId:any) {
    return await scanDetailModel.findAll({
      where: {
        ScanId: scanId,
      },
    });
  }
}

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

export default new ScanDetailService;
