##backend routes
Method-GET
Route-/todos
description-gets all the todos from the database
response-JSON todos

Method-POST
Route-/todos
description-create a new todo
response-JSON msg:successfull

Method-GET
Route-/todo/:id
description-get the todo by id
response-JSON todo
