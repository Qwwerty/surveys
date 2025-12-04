import { loginPath, signUpPath, surveyPath, surveypResultPath } from './paths/'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveypResultPath
}
