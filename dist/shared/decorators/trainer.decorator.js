"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
const common_1 = require("@nestjs/common");
exports.Trainer = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.trainer;
});
//# sourceMappingURL=trainer.decorator.js.map