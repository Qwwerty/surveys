# Answer Survey

> ## Success Case

1. ⛔️ Receives a **PUT** request at the **/api/surveys/{survey_id}/results** route  
2. ⛔️ Validates that the request was made by a **user**  
3. ✅ Validates the **survey_id** parameter  
4. ⛔️ Validates that the **answer** field contains a valid response  
5. ⛔️ **Creates** a survey result with the provided data if no record exists  
6. ⛔️ **Updates** the survey result with the provided data if a record already exists  
7. ⛔️ Returns **200** with the survey result data

> ## Exceptions

1. ⛔️ Returns **404** error if the API endpoint does not exist  
2. ⛔️ Returns **403** error if the requester is not a valid user  
3. ✅ Returns **403** error if the **survey_id** provided in the URL is invalid  
4. ⛔️ Returns **403** error if the **answer** provided by the client is invalid  
5. ⛔️ Returns **500** error if an error occurs while creating the survey result  
6. ⛔️ Returns **500** error if an error occurs while updating the survey result  
7. ⛔️ Returns **500** error if an error occurs while loading the survey
