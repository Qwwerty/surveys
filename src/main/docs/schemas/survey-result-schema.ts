export const surveyResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    surveyId: {
      type: 'string'
    },
    accountId: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyAnswer'
      }
    },
    answer: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  }
}
