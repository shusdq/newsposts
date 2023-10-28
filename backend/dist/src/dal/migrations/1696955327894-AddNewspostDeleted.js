"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewspostDeleted1696955327894 = void 0;
class AddNewspostDeleted1696955327894 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "newspost" ADD "deleted" BOOLEAN DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "newspost" DROP COLUMN "deleted"`);
    }
}
exports.AddNewspostDeleted1696955327894 = AddNewspostDeleted1696955327894;
