"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_schema_1 = require("./base/base.schema");
const role_enum_1 = require("./enums/role.enum");
class Profile {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Profile.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Profile.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Profile.prototype, "height", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Trainer' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Profile.prototype, "preferredTrainerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Goal' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Profile.prototype, "goal", void 0);
let Progress = class Progress {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Progress.prototype, "currentWeight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Progress.prototype, "goalWeight", void 0);
Progress = __decorate([
    (0, mongoose_1.Schema)()
], Progress);
class SelectedPlan {
}
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'WorkoutPlan' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SelectedPlan.prototype, "plan_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], SelectedPlan.prototype, "isUsing", void 0);
let User = class User extends base_schema_1.BaseSchema {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Profile }),
    __metadata("design:type", Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Progress }),
    __metadata("design:type", Progress)
], User.prototype, "progress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: role_enum_1.Role, default: role_enum_1.Role.USER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
    }),
    __metadata("design:type", Array)
], User.prototype, "selectedPlans", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'WorkoutPlan' }]),
    __metadata("design:type", Array)
], User.prototype, "customPlanIds", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map