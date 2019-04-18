# Databases

## tiny app

* url database
* users database

```js
var urls = {
  "asdf": {
    longUrl: "https://www.lighthouselabs.com",
    short: "asdf",
    userId: "fdsa"
  }
}
```

## tweeter

* tweets

## Probelm

We need top persist data longer than the life of our application.

* Hard code data into the app.
* Store the data outside of the application.
  - in a text file `.txt`
  - in a `.json` file
  - `.csv`: "https://www.lighthouselabs.com", "asdf", "fdsa"

* you could have a really really big file, which could take a really really long time to load.
* querying the file is hard.
* scaling. 

## Database Management System DBMS

### Mongo

Application that will manage our database.

- databases
  - collections
    - documents

- databases: tiny-app, tweeter
  - collections: urls, users, tweets
    - documents: url, user, tweet

* mongo stores data as BSON, which is basically like JSON. 
  - B: Binary

```json
"urls": {
  "asdf": {
    "longUrl": "https://www.lighthouselabs.com",
    "short": "asdf",
    "userId": "fdsa",
    "clickedBy": ["fdsa"]
  },
  "asdf2": {
    "longUrl": "https://www.lighthouselabs.com",
    "short": "asdf2",
    "userId": "fdsa"
  }
}
```

### "students"
```json
 {
   "1" : {
    "id": 1,
    "name": "John",
    "age": 25,
    "alergies": ["grass", "nuts", "oxygen", "squid"],
    "classes": [
      {"name": "math", "grade": "f"}, 
      {"name": "cheese making", "grade": "p"}
      ]
   }
 }
 ```


 ## CRUD, BREAD

 * Create: `.insert()`
 * Read: `.find()`
 * Update: `.update()`
 * Delete: `.remove()`

 * Browse: `.find()`
 * Read: `.find()`
 * Edit: `.update()`
 * Add: `.insert()`
 * Delete: `.remove()`