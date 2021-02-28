import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity("surveys_users")
class SurveyUser {

	@PrimaryColumn()
	readonly id: string;

	@Column()
	user_id: string;

	@ManyToOne(() => User)
	@JoinColumn({name: "user_id"})
	user: User

	@Column()
	survey_id: string;

	@ManyToOne(() => Survey)
	@JoinColumn({name: "survey_id"})
	survey: Survey

	@column()
	value: number;

	@CreateDateColumn()
	created_at: Date

	constructor() {
		if(!this.id) {
			this.id = uuid()
		}
	}
}

export{
	SurveyUser
}