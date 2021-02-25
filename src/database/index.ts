import { Connection, createConnection, getConnectionOption } from 'typeorm'

export default async (): Promise<Connection> => {
	const defaultOption = await getConnectionOption();
	return createConnection(
		Object.assign(defaultOption, {
			database: process.env.NODE_ENV === 'test'
			 ? "./src/database/database.test.sqlite" 
			 :defaultOption.database
		})
		)
}