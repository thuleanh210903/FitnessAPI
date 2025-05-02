"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertObjectId = void 0;
const mongoose_1 = require("mongoose");
const convertObjectId = (id) => {
    const newId = new mongoose_1.Types.ObjectId(id);
    return newId;
};
exports.convertObjectId = convertObjectId;
//# sourceMappingURL=converToObjId.js.map