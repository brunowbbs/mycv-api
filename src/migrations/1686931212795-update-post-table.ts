import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePostTable1686931212795 implements MigrationInterface {
  name = 'UpdatePostTable1686931212795';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_entity" ("id" integer NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "report_entity" ("id" SERIAL NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_7862cb0d03ad2677692143cf38e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "report_entity"`);
    await queryRunner.query(`DROP TABLE "user_entity"`);
  }
}
