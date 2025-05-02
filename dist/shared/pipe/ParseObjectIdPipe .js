"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseObjectIdPipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class ParseObjectIdPipe {
    transform(value, metadata) {
        if (!mongoose_1.Types.ObjectId.isValid(value)) {
            throw new common_1.BadRequestException(`Invalid ObjectId: ${value}`);
        }
        return new mongoose_1.Types.ObjectId(value);
    }
}
exports.ParseObjectIdPipe = ParseObjectIdPipe;
//# sourceMappingURL=ParseObjectIdPipe%20.js.map