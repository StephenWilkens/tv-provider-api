# TV Provider API

## About
This is a REST API built with Javascript, utilizing the Node.js enviornment, the Express.js framework, and a PostgreSQL database. The database holds four tables representing packages, networks, shows, and the relationship between packages and networks. 

## Instructions

- [Setup](#SETUP)
- [Endpoints](#ENDPOINTS)
- [Postman Requests](#POSTMAN)
- [TODOs](#TODO)

---

# SETUP

1. Clone this repository to your chosen local directory using the SSH key:
`$ git clone 'SSH key'`

2. Install Node Package Manager:
`$ npm install -g npm`

3. Install the applications dependencies:
`$ npm i`

4. Install the Sequelize CLI:
`$ npm install -g sequelize-cli`

5. Install PostgreSQL by visiting 'https://www.postgresql.org/download/' and selecting the correct download for you operating system.

6. Create the database:
`$ sequelize db:create`

7. Seed the database: 
`$ npm run db:reset`

8. Start the server:
`$ npm start`

---

# ENDPOINTS 

- Available Endpoints:
  - [Packages](##PACKAGES)
  - [Networks](##NETWORKS)
  - [Shows](##SHOWS)


## PACKAGES

### Get all Packages
[GET] `http//:localhost:3000/api/v1/packages`

Example response:

``` javascript
[
    {
        "id": 80,
        "title": "Gold",
        "price": "37.9",
        "createdAt": "2023-01-24T21:03:26.295Z",
        "updatedAt": "2023-01-24T21:03:26.295Z"
    },
    {
        "id": 82,
        "title": "Silver",
        "price": "27.9",
        "createdAt": "2023-01-24T21:03:26.295Z",
        "updatedAt": "2023-01-24T21:03:26.295Z"
    },
    {
        "id": 79,
        "title": "Basic",
        "price": "9.9",
        "createdAt": "2023-01-24T21:03:26.294Z",
        "updatedAt": "2023-01-24T21:03:26.294Z"
    }
]
```

### Get a Package by ID
[GET] `http//:localhost:3000/api/v1/packages/:id`

Example response:

``` javascript
{
    "id": 80,
    "title": "Gold",
    "price": "37.9",
    "createdAt": "2023-01-24T21:03:26.295Z",
    "updatedAt": "2023-01-24T21:03:26.295Z",
    "networks": [
        {
            "id": 168,
            "title": "CW"
        },
        {
            "id": 169,
            "title": "CBS"
        }
    ]
}
```

### Create a Package
[POST] `http//:localhost:3000/api/v1/packages`

Example body:
``` javascript
{
    "title": "Premium",
    "price": 99.99
}
```

### Update a Package
[PUT] `http//:localhost:3000/api/v1/packages/:id`

Example body:
``` javascript
{
    "title": "Rabbit Ears",
    "price": 0
}
```

### Add a Network to a Package
[PUT] `http//:localhost:3000/api/v1/packages/:id/:networkId`

### Delete a Package
[DELETE] `http//:localhost:3000/api/v1/packages/:id`

---

## NETWORKS

### Get all Networks
[GET] `http//:localhost:3000/api/v1/networks`

Example response:

``` javascript
[
    {
        "id": 166,
        "title": "BET",
        "createdAt": "2023-01-24T21:03:27.044Z",
        "updatedAt": "2023-01-24T21:03:27.044Z"
    },
    {
        "id": 168,
        "title": "CW",
        "createdAt": "2023-01-24T21:03:27.053Z",
        "updatedAt": "2023-01-24T21:03:27.053Z"
    },
    {
        "id": 167,
        "title": "NBC",
        "createdAt": "2023-01-24T21:03:27.038Z",
        "updatedAt": "2023-01-24T21:03:27.038Z"
    },
    {
        "id": 169,
        "title": "CBS",
        "createdAt": "2023-01-24T21:03:27.048Z",
        "updatedAt": "2023-01-24T21:03:27.048Z"
    }
]
```

### Get a Network by ID
[GET] `http//:localhost:3000/api/v1/networks/:id`

Example response:

``` javascript
{
    "id": 170,
    "title": "ABC",
    "createdAt": "2023-01-24T21:03:27.054Z",
    "updatedAt": "2023-01-24T21:03:27.054Z"
}
```

### Create a Network
[POST] `http//:localhost:3000/api/v1/networks`

Example body:
``` javascript
{
    "title": "Showtime"
}
```

### Update a Network
[PUT] `http//:localhost:3000/api/v1/networks/:id`

Example body:
``` javascript
{
  "title": "VH1"
}
```

### Add a Show to a Network
[PUT] `http//:localhost:3000/api/v1/networks/:id/:showId`

### Delete a Network
[DELETE] `http//:localhost:3000/api/v1/networks/:id`

---

## SHOWS

### Get all Shows
[GET] `http//:localhost:3000/api/v1/shows`

Example response:

``` javascript
[
    {
        "id": 151,
        "title": "Mom",
        "imdbRating": "7.2",
        "createdAt": "2023-01-24T21:03:27.876Z",
        "updatedAt": "2023-01-24T21:03:27.876Z",
        "networkId": null
    },
    {
        "id": 154,
        "title": "Outlander",
        "imdbRating": "8.4",
        "createdAt": "2023-01-24T21:03:27.957Z",
        "updatedAt": "2023-01-24T21:03:27.957Z",
        "networkId": null
    },
    {
        "id": 155,
        "title": "Southern Charm",
        "imdbRating": "6.2",
        "createdAt": "2023-01-24T21:03:27.958Z",
        "updatedAt": "2023-01-24T21:03:27.958Z",
        "networkId": null
    },
    {
        "id": 163,
        "title": "Zoey's Extraordinary Playlist",
        "imdbRating": "8.1",
        "createdAt": "2023-01-24T21:03:28.066Z",
        "updatedAt": "2023-01-24T21:03:28.066Z",
        "networkId": null
    },
    {
        "id": 145,
        "title": "American Gods",
        "imdbRating": "7.7",
        "createdAt": "2023-01-24T21:03:27.693Z",
        "updatedAt": "2023-01-24T21:03:52.166Z",
        "networkId": 176
    }
]
```

### Get a Show by ID
[GET] `http//:localhost:3000/api/v1/shows/:id`

Example response:

``` javascript
{
    "id": 145,
    "title": "American Gods",
    "imdbRating": "7.7",
    "createdAt": "2023-01-24T21:03:27.693Z",
    "updatedAt": "2023-01-24T21:03:52.166Z",
    "networkId": 176
}
```

### Create a Show
[POST] `http//:localhost:3000/api/v1/networks/:networkId/shows`

Example body:
``` javascript
{
    "title": "Dexters Lab",
    "imdbrating": 9.9
}
```

### Update a Show
[PUT] `http//:localhost:3000/api/v1/shows/:id`

Example body:
``` javascript
{
    "title": "Dexter's Lab",
    "imdbrating": 10
}
```

### Delete a Show
[DELETE] `http//:localhost:3000/api/v1/shows/:id`

---

# POSTMAN

1. Open Postman and select 'Import' from the file drop down menu at the top.

2. Drag and drop the "Charter Challenge.postman_collection.json" file from the postmanRequests folder into the window.

3. Select 'Import'.

4. With your server running ($ npm start) you can use any of the provided requests. 

# TODO

* In depth happy path testing
* Sad path testing
* More relational requests
* Hosting
* CI/CD
