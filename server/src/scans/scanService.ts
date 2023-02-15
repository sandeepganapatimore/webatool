import ScanModel from './scanModel'

class ScanService {
  // instance method used with creating instance of class
  async getById(id:Number) {
    return await ScanModel.findByPk(Number(id), {
      include: ["ScanDetails"],
    });
  }
 
  async getAll() {
    return await ScanModel.findAll();
  }

  async remove(id:Number) {
    return await ScanModel.destroy({
      where: {
        id: id,
      },
    });
  }

  async update(id:Number, url:any) {
    return await ScanModel.update(
      { url: url },
      {
        where: {
          id: id,
        },
      }
    );
  }

  async create(url:any, trans:any) {
    return await ScanModel.create({ url: url }, { transaction: trans });
  }
}

export default new ScanService();
