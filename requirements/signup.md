# Signup

> ## Success Case

1. ✅ Receives a **POST** request at the **/api/signup** route  
2. ✅ Validates required fields: **name**, **email**, **password**, and **passwordConfirmation**  
3. ✅ Validates that **password** and **passwordConfirmation** match  
4. ✅ Validates that the **email** field contains a valid email address  
5. ✅ **Checks** if a user with the provided email already exists  
6. ✅ Generates an **encrypted password** (this password cannot be decrypted)  
7. ✅ **Creates** a user account with the provided data, **replacing** the password with the encrypted one  
8. ✅ Generates an access **token** based on the user ID  
9. ✅ **Updates** the user data with the generated access token  
10. ✅ Returns **200** with the access token and the user's name

> ## Exceptions

1. ✅ Returns **404** error if the API endpoint does not exist  
2. ✅ Returns **400** error if **name**, **email**, **password**, or **passwordConfirmation** are not provided by the client  
3. ✅ Returns **400** error if **password** and **passwordConfirmation** do not match  
4. ✅ Returns **400** error if the **email** field is invalid  
5. ✅ Returns **403** error if the provided email is already in use  
6. ✅ Returns **500** error if an error occurs while generating the encrypted password  
7. ✅ Returns **500** error if an error occurs while creating the user account  
8. ✅ Returns **500** error if an error occurs while generating the access token  
9. ✅ Returns **500** error if an error occurs while updating the user with the generated access token
