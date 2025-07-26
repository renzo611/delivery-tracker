import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntities1753538370622 implements MigrationInterface {
    name = 'UserEntities1753538370622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" integer NOT NULL, "role_name" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "phone_number" character varying(255) NOT NULL, "country" character varying(255) NOT NULL, "province" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, "second_address" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_role" ("user_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_f634684acb47c1a158b83af5150" PRIMARY KEY ("user_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d0e5815877f7395a198a4cb0a4" ON "user_role" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55" ON "user_role" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32a6fc2fcb019d8e3a8ace0f55"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d0e5815877f7395a198a4cb0a4"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
