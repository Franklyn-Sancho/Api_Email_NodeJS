import { Request, Response } from 'express'
import { SurveysRepository } from "../repositories/SurveysRepository"
import { getCustomRepository } from "typeorm";

class SurveysController {
	async create(request: Request, response: Response) {
		const { title, description } = request.body
		const SurveysRepository = getCustomRepository(SurveysRepository);

		const survey = SurveysRepository.create ({
			title,
			description
		})

		await SurveysRepository.save(survey)
		return response.status(201).json(survey)
	}

	async show (request: Request, response: Response) {
		const surveysRepository = getCustomRepository(SurveysRepository);

		const all = await surveysRepository.find()

		return response.status(201).json(all);
	}
}

export { SurveysController }