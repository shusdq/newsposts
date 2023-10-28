import { MigrationInterface, QueryRunner } from "typeorm"

export class RenameNewspostTitle1696955170116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "newspost" RENAME COLUMN "title" TO "header"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "newspost" RENAME COLUMN "header" TO "title"`,
        ) 
    }

}
