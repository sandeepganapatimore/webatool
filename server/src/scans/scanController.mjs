import { create, getAll, remove, getById } from "./scanService.mjs";
import analyzeUrl from "../utils/analyzeUrl.mjs";
import {
  create as createScanDetails,
  remove as removeScanDetails,
} from "../scanDetails/scanDetailService.mjs";

async function getScans(req, res) {
  const result = await getAll();
  res.send(result);
}

async function createScans(req, res) {
  const { url } = req.body;

  // Ensure a URL was provided.
  if (!url) {
    res.status(404);
    res.json({ success: false, error: "url is required" });
    return;
  }

  // Ensure the URL is valid.
  try {
    new URL(url);
    // const input = new URL(url);
    // input.hostname;
    // console.log(input.hostname);
  } catch (error) {
    res.status(400);
    res.json({ success: false, error: `Invalid URL: ${error?.message}` });
    return;
  }

  try {
    // we pass the input url to the create() method after all the validations. it will create
    // the column in table for this url.
    const scanRow = await create(url);
    console.log("Scan row", scanRow);
    // we then pass the same url to the analyzeurl() we calculating accessibility results.
    const results = await analyzeUrl(url);
    // Here we put the scanRow?.id value in the ScanId because scanId is the foreign key of the scansDetails
    // table. We create the object of scanId and analyzed result in the createScanDetails table.
    const source = { scanId: scanRow?.id, results: results };
    // Then this source object is passed to the createScanDetails() method

    await createScanDetails(source);

    // 201 we send the status code of the creation.
    res.status(201);
    // we pass the response value in json formate by creating three entities success,data and message
    res.json({
      success: true,
      data: { scanId: scanRow.id },
      message: "Created successfully",
    });

  }
  
  catch (error) {
    // error message we send 404 as status code.
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

