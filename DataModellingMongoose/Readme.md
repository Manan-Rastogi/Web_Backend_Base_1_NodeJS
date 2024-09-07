# Mongoose Schema for Mongo

## Schema
Imagine a schema as a blueprint for building a house. Just like a blueprint tells builders how to construct a house with rooms, doors, and windows, a schema tells our code how to create and organize data with specific properties.

In the context of Mongoose and MongoDB, a schema is a way to define the structure of your data model. It defines the shape of the documents within a collection, specifying the fields, types, and constraints for each field. When you create a schema using Mongoose, you are essentially creating a template that enforces the structure of the data that can be stored in a MongoDB collection.

- Refer to `user.models.js` for code

## Model vs Schema
Imagine you are building a house with LEGO bricks. The Schema is like the instruction manual that tells you how to build a specific type of LEGO house, like a castle or a spaceship. The model is like the actual LEGO house that you build following the instructions in the manual. So, when we export the model from the schema, it's like taking the instructions and using them to build the actual LEGO house.

In the context of Mongoose, a Schema is a blueprint that defines the structure of your data in MongoDB. It specifies the shape of documents within a collection, including the properties and their types. On the other hand, **a model is a constructor function that creates instances of documents based on the schema**.

- Refer to `user.models.js` for code

### FAQ

#### Q. `mongoose.model("User", userSchema)` Name of collection in DB?
A.  User -> users

#### Q. How to map relations between collections?
A.  Check the code in `sub_todos.models.js`

#### Q. How to set custom error message?
A.  Refer to `user.models.js` for code

#### Q. How to store enums?
A.  check orders.models.js >> orcerSchema >> status

#### Q. Array of Schema with seperate schema?
A.  check orders.models.js >> orcerSchema >> orderItems

