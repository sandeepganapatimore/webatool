import ScanModel from './scanModel'

const paginate = (query, { page, pageSize }) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    ...query,
    offset,
    limit,
  };
};

class ScanService {
  // instance method used with creating instance of class
  async getById(id: Number) {
    return await ScanModel.findByPk(Number(id), {
      include: ["ScanDetails"],
    });
  }

  async getAll(inputs: any) {
    // console.log('inputs', inputs)
    const { page, pageSize, search, field, sort } = inputs;
    let query: any;
    if (search) {
      query = {
        where: { url: search },
        offset: page,
        limit: pageSize,
        order: [[field, sort]],
      }
    } else {
      query = {
        offset: page,
        limit: pageSize,
        order: [[field, sort]],
      };
    }

    console.log('page, pageSize', page, pageSize, search)
    return await ScanModel.findAndCountAll(query);
  }

  async remove(id: Number) {
    return await ScanModel.destroy({
      where: {
        id: id,
      },
    });
  }

  async update(id: Number, url: any) {
    return await ScanModel.update(
      { url: url },
      {
        where: {
          id: id,
        },
      }
    );
  }

  async create(url: any, trans: any) {
    return await ScanModel.create({ url: url }, { transaction: trans });
  }
}

export default new ScanService();
