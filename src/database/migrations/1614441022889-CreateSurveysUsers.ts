import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveysUsers1614441022889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.createTable(
    		new Table({
    			name: "surveys_users",
    			columns: [{
    				name: "id",
    				type: "uuid",
    				isPrimary: true
    			},
    			{
    				name: "user_id",
    				type: "uuid"
    			},
    			{
    				name: "survey_id",
    				type: "uuid"
    			},
    			{
    				name: "value",
    				type: "number",
    				isNullable: true
    			},
    			{
    				name: "created_at",
    				type: "timestamp",
    				default: "now()"
    			},
    		],
    		foreignKeys: [{
    			name: "FKUser",
    			referencedTableName: "users",
    			referenceColumnNames: ["id"],
    			columnNames: ["user_id"],
    			onDelete: "CASCATE",
    			onUpdate: "CASCATE"
    			},
    			{
    			name: "FKSurvey",
    			referencedTableName: "Surveys",
    			referenceColumnNames: ["id"],
    			columnNames: ["survey_id"],
    			onDelete: "CASCATE",
    			onUpdate: "CASCATE"
    			}
    		]
    		})
    		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.dropTable("surveys_users")
    }

}
