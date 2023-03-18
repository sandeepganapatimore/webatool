import sequelize from "../db/db";
import analyzeUrl from "../utils/analyzeUrl";
import scanService from "./scanService";
import scanDetailService from "../scanDetails/scanDetailService";

export class ScanController {
  //  private scanService = new ScanService();
  //  private scanDetailService = new ScanDetailService();

  async getScans(req, res) {
    const result = await scanService.getAll(req.body);
    res.send(result);
  }

  async createScans(req, res) {
    const { url } = req.body;
    try {
      await sequelize.transaction(async (trans) => {
        const scanRow = await scanService.create(url, trans) as any;
        const results = await analyzeUrl(url);
        const source = { scanId: scanRow?.id, results: results };
        // scanDetails
        await scanDetailService.create(source, trans);
        res.status(201);
        res.json({
          success: true,
          data: { scanId: scanRow.id },
          message: "Created successfully",
        });
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        error: error.message,
      });
    }
  }
  async removeScans(req, res) {
    const { id } = req.params;
    // Ensure a URL was provided.
    if (!Number.isInteger(Number(id))) {
      res.status(404);
      res.json({ success: false, error: "Id is not valid" });
      return;
    }
    try {
      // scandetails
      await scanDetailService.remove(id);
      await scanService.remove(id);
      res.sendStatus(204);
      // res.json({ success: true, message: "Deleted Successfully" });
    } catch (error) {
      res.status(404).json({
        success: false,
        error: error.message,
      });
    }
  }
  // async function updateScans(req, res) {
  //   const result = await update(req.params.id, req?.body?.url);
  //   res.send(result);
  // }
  async getScansById(req, res) {
    const { id } = req.params;
    // Ensure a URL was provided.
    if (!Number.isInteger(Number(id))) {
      res.status(404);
      res.json({ success: false, error: "Id is not valid" });
      return;
    }
    try {
      const result = await scanService.getById(id);
      if (result === null) {
        res
          .status(404)
          .json({ success: true, error: "Scan records not found" });
        return;
      }
      res.status(200);
      res.json({
        success: true,
        data: result,
        message: "fetched Successfully",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        error: error.message,
      });
    }
  }
}


