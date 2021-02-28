import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"

class AnswerController {
	async execute(request: Request, response: Response) {
		const { values } = request.params;
		const { u } = request.query;

		const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

		const surveyUser = await surveyUsersRepository.findOne({
			id: String(u)
		})

		if(!surveyUser) {
			return response.status(400).json({
				error: "survey user does not exists"
			})
		}

		surveyUser.value = Number(value);

		await surveyUsersRepository.save(surveyUser)

		return response.json(surveyUser)
	}
}

export { AnswerController }