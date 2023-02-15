"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanController = void 0;
var db_1 = __importDefault(require("../db/db"));
var analyzeUrl_1 = __importDefault(require("../utils/analyzeUrl"));
var scanService_1 = __importDefault(require("./scanService"));
var scanDetailService_1 = __importDefault(require("../scanDetails/scanDetailService"));
var ScanController = /** @class */ (function () {
    function ScanController() {
    }
    //  private scanService = new ScanService();
    //  private scanDetailService = new ScanDetailService();
    ScanController.prototype.getScans = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, scanService_1.default.getAll()];
                    case 1:
                        result = _a.sent();
                        res.send(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanController.prototype.createScans = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var url, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = req.body.url;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, db_1.default.transaction(function (trans) { return __awaiter(_this, void 0, void 0, function () {
                                var scanRow, results, source;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, scanService_1.default.create(url, trans)];
                                        case 1:
                                            scanRow = _a.sent();
                                            return [4 /*yield*/, (0, analyzeUrl_1.default)(url)];
                                        case 2:
                                            results = _a.sent();
                                            source = { scanId: scanRow === null || scanRow === void 0 ? void 0 : scanRow.id, results: results };
                                            // scanDetails
                                            return [4 /*yield*/, scanDetailService_1.default.create(source, trans)];
                                        case 3:
                                            // scanDetails
                                            _a.sent();
                                            res.status(201);
                                            res.json({
                                                success: true,
                                                data: { scanId: scanRow.id },
                                                message: "Created successfully",
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        res.status(404).json({
                            success: false,
                            error: error_1.message,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ScanController.prototype.removeScans = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        // Ensure a URL was provided.
                        if (!Number.isInteger(Number(id))) {
                            res.status(404);
                            res.json({ success: false, error: "Id is not valid" });
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        // scandetails
                        return [4 /*yield*/, scanDetailService_1.default.remove(id)];
                    case 2:
                        // scandetails
                        _a.sent();
                        return [4 /*yield*/, scanService_1.default.remove(id)];
                    case 3:
                        _a.sent();
                        res.sendStatus(204);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        res.status(404).json({
                            success: false,
                            error: error_2.message,
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // async function updateScans(req, res) {
    //   const result = await update(req.params.id, req?.body?.url);
    //   res.send(result);
    // }
    ScanController.prototype.getScansById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        // Ensure a URL was provided.
                        if (!Number.isInteger(Number(id))) {
                            res.status(404);
                            res.json({ success: false, error: "Id is not valid" });
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, scanService_1.default.getById(id)];
                    case 2:
                        result = _a.sent();
                        if (result === null) {
                            res
                                .status(404)
                                .json({ success: true, error: "Scan records not found" });
                            return [2 /*return*/];
                        }
                        res.status(200);
                        res.json({
                            success: true,
                            data: result,
                            message: "fetched Successfully",
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        res.status(404).json({
                            success: false,
                            error: error_3.message,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ScanController;
}());
exports.ScanController = ScanController;
//# sourceMappingURL=scanController.js.map