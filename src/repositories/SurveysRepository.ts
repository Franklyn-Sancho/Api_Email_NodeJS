import { Survey } from "../models/Survey"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository }