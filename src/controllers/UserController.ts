import { request, response } from 'express';
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"
import * as yup from 'yup'

class UserController{
	async create(request: Request, response: Response) {
		const { name, email } = request.body;

		const schema = yup.object().shape({
			name: yup.string().required("nome é obrigatório"),
			email: yup.string().email().required("email é obrigatório")
		})

		try {
			await schema.validate(request.body, {abortEarly: false})
		} catch (err) {
			return response.status(400)({ error : err})
		}

		const usersRepository = getCustomRepository(UsersRepository);

		const userAlreadyExists = await usersRepository.findOne({
			email,
		});

		if(userAlreadyExists) {
			return response.status(400).json({
				error: "User already exists"
			});
		}

		const user = usersRepository.create({
			name,
			email,
		})

		await usersRepository.save(user);

		return response.json(user);
	}
}

export { UserController };