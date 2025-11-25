import { SurveyModel } from '../../models/survey'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (add: AddSurveyModel) => Promise<void>
}
