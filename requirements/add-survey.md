# Create Survey

> ## Success Case

1. ✅ Receives a **POST** request at the **/api/surveys** route  
2. ✅ Validates that the request was made by an **admin**  
3. ✅ Validates required fields: **question** and **answers**  
4. ✅ **Creates** a survey with the provided data  
5. ✅ Returns **204**, with no content

> ## Exceptions

1. ✅ Returns **404** error if the API endpoint does not exist  
2. ✅ Returns **403** error if the user is not an admin  
3. ✅ Returns **400** error if **question** or **answers** are not provided by the client  
4. ✅ Returns **500** error if an error occurs while creating the survey
