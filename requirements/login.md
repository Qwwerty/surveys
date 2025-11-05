# Login

> ## Success Case

1. ✅ Receives a **POST** request at the **/api/login** route  
2. ✅ Validates required fields: **email** and **password**  
3. ✅ Validates that **email** is a valid email address  
4. ✅ **Finds** the user with the provided email and password  
5. ✅ Generates an access **token** based on the user ID  
6. ✅ **Updates** the user data with the generated access token  
7. ✅ Returns **200** with the access token and the user's name

> ## Exceptions

1. ✅ Returns **404** error if the API endpoint does not exist  
2. ✅ Returns **400** error if **email** or **password** are not provided by the client  
3. ✅ Returns **400** error if the **email** field is invalid  
4. ✅ Returns **401** error if no user is found with the provided credentials  
5. ✅ Returns **500** error if an error occurs while generating the access token  
6. ✅ Returns **500** error if an error occurs while updating the user with the generated token
