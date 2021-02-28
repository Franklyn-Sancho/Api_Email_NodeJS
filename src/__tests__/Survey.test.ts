
import request from "supertest";
import { app } from "../app"
import createConnection from '../database'

describe("Surveys", async () => {
	beforeAll(async () => {
		const connection = await createConnection();
		await connection.runMigrations()
	})

	it("should be able to create a new surveys", async () => {
	const response = await request(app).post("/surveys").send({
		title: "titulo",
		description: "Descrição"
	})

	expect(response.status).toBe(201);
	expect(response.body).toHaveProperty("id")
	})

	it("should be able to het all surveys", async () => {
		await request(app).post("/surveys").send({
			title: "titulo2",
			description: "descrição 2"
		})

		const response = await request(200).get("/surveys")
		expect(response.body.length).toBe(2)
	})

	
})