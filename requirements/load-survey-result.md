# Survey Result

> ## Success Case

1. ⛔️ Receive a **GET**  request at the **/api/surveys/{survey_id}/results** route
2. ⛔️ Validates that the request was made by a **user**
3. ⛔️ Returns *200** with the survey result data

> ## Exceptions

1. ⛔️ Return **404** error if the API endpoint does not exist
2. ⛔️ Return **403** if the requester is not a valid user
3. ✅ Return **500** if an error occurs while retrvieving the survey result