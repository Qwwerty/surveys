# List Surveys

> ## Success Case

1. ⛔️ Receives a **GET** request at the **/api/surveys** route
2. ⛔️ Validates that the request was made by a **user**
3. ✅ Returns **204** if there are no surveys available
4. ✅ Returns **200** with the survey data

> ## Exceptions

1. ⛔️ Returns **404** error if the API endpoint does not exists
2. ⛔️ Returns **403** error if the requester is not a valid user
3. ✅ Returns **500** error if an error occurs while retrieving the surveys