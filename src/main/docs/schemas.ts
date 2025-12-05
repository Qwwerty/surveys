import {
  accountSchema,
  addSurveyParamsSchema,
  errorSchema,
  loginParamsSchema,
  saveSurveyParamsSchema,
  signUpParamsSchema,
  surveyAnswerSchema,
  surveyResultAnswerSchema,
  surveyResultSchema,
  surveySchema,
  surveysSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
