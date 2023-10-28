"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserDelete1696955448651 = void 0;
class AddUserDelete1696955448651 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "deleted" BOOLEAN DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deleted"`);
    }
}
exports.AddUserDelete1696955448651 = AddUserDelete1696955448651;
