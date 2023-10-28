import { MigrationInterface, QueryRunner } from "typeorm"

export class AddNewspostDeleted1696955327894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "newspost" ADD "deleted" BOOLEAN DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "newspost" DROP COLUMN "deleted"`);
    }

}
