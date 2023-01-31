import { create, getAll, remove, getById } from "./scanService.mjs";
import analyzeUrl from "../utils/analyzeUrl.mjs";
import {
  create as createScanDetails,
  remove as removeScanDetails,
} from "../scanDetails/scanDetailService.mjs";
import sequelize from "../db/db.mjs";

async function getScans(req, res) {
  const result = await getAll();
  res.send(result);
}

async function createScans(req, res) {
  const { url } = req.body;
  try {
    await sequelize.transaction(async (trans) => {
      const scanRow = await create(url, trans);
      const results = await analyzeUrl(url);
      const source = { scanId: scanRow?.id, results: results };
      await createScanDetails(source, trans);
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

async function removeScans(req, res) {
  const { id } = req.params;
  // Ensure a URL was provided.
  if (!Number.isInteger(Number(id))) {
    res.status(404);
    res.json({ success: false, error: "Id is not valid" });
    return;
  }

  try {
    await removeScanDetails(id);
    await remove(id);
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

async function getScansById(req, res) {
  const { id } = req.params;
  // Ensure a URL was provided.
  if (!Number.isInteger(Number(id))) {
    res.status(404);
    res.json({ success: false, error: "Id is not valid" });
    return;
  }

  try {
    const result = await getById(id);

    if (result === null) {
      res.status(404).json({ success: true, error: "Scan records not found" });
      return;
    }

    res.status(200);
    res.json({ success: true, data: result, message: "fetched Successfully" });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
}

export { getScans, createScans, removeScans, getScansById };
