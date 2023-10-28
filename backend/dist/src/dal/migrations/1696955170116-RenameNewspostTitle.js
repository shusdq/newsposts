"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameNewspostTitle1696955170116 = void 0;
class RenameNewspostTitle1696955170116 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "newspost" RENAME COLUMN "title" TO "header"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "newspost" RENAME COLUMN "header" TO "title"`);
    }
}
exports.RenameNewspostTitle1696955170116 = RenameNewspostTitle1696955170116;
