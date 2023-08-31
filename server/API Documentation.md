# Branded Things API Documentation

## RESTful endpoints

### POST /users/register

> Register User

_Request Header_

- header : -

_Request Body_

```json
{
  "username": "GioSwagger",
  "email": "fiaPurjut@yahooee.com",
  "password": "12345",
  "phoneNumber": "434-795-5665",
  "address": "1564 Basil Place"
}
```

_Response (201)_

```json
{
  "status": "succes",
  "msg": "User with email fiaPurjut@yahoo.com and id 6 has been created"
}
```

_Response (400 - SequelizeUniqueConstraintError)_

```json
{
  "msg": "email already used"
}
```

_Response (400 - SequelizeValidationError)_

```json
{
  "msg": "email is required"
}
```

OR

```json
{
  "msg": "username is required"
}
```

OR

```json
{
  "msg": "password is required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### POST /users/login

> Login User

_Request Header_

- header : -

_Request Body_

```json
{
  "email": "fiaPurjut@yahoo.com",
  "password": "12345"
}
```

_Response (201)_

```json
{
  "msg": "Login succesfull",
  "accest_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjg2MTY1Njg0fQ.bR4c_43DohD4H8DeMEX4CYcxZzRKOiTnOGKV3HyqqPI"
}
```

_Response (400 - EmailPasswordIsRequired)_

```json
{
  "msg": "Email/Password is required"
}
```

_Response (401 - EmailPasswordInvalid)_

```json
{
  "msg": "Email / Password is incorrect"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

### GET /tours

> Read all tours

_Request Header_

- header : -

_Request Body_

-No need

_Response (200)_

```json
{
    "totalTour": 9,
    "tours": [
        {
            "id": 9,
            "name": "Danau Segara Anak",
            "duration": 9,
            "participant": 10,
            "slot": 10,
            "difficulty": "Normal",
            "ratingsAverage": 5,
            "price": 500000,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imageCover": "https://images.unsplash.com/photo-1621001481322-facc9cd1dae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            "startDates": "2024-05-27T00:00:00.000Z",
            "image": "http://dummyimage.com/105x100.png/ff4444/ffffff",
            "startLocation": "Mataram",
            "lat": "-8.398134894867596",
            "lng": "116.40645518543243",
            "guides": "Lindy Brayley"
        },
        {
            "id": 8,
            "name": "Bukit Sempana",
            "duration": 5,
            "participant": 10,
            "slot": 10,
            "difficulty": "Normal",
            "ratingsAverage": 5,
            "price": 500000,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imageCover": "https://images.unsplash.com/photo-1630396805791-e682f0c335ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
            "startDates": "2024-11-18T00:00:00.000Z",
            "image": "http://dummyimage.com/224x100.png/5fa2dd/ffffff",
            "startLocation": "Mataram",
            "lat": "-8.389500191106714",
            "lng": "116.58132630405576",
            "guides": "Tatum Tansley"
        },

        ...
    ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### GET /tours/:id

> Get tour by id

_Request Header_

- header : -

_Request Body_

- body : -

_Response (200)_

```json
{
  "tour": {
    "id": 1,
    "name": "Senggigi",
    "duration": 3,
    "participant": 10,
    "slot": 10,
    "difficulty": "Normal",
    "ratingsAverage": 5,
    "price": 500000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageCover": "https://images.unsplash.com/photo-1612268585071-2b2332c03688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "startDates": "2024-10-06T00:00:00.000Z",
    "image": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
    "startLocation": "Mataram",
    "lat": "-8.48526478393511",
    "lng": "116.04730869055406",
    "guides": "Homer Tunesi"
  },
  "data": "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100\" height=\"100\" viewBox=\"0 0 2000 2000\" x=\"0\" y=\"0\" shape-rendering=\"crispEdges\"><defs/><rect x=\"0\" y=\"0\" width=\"2000\" height=\"2000\" fill=\"#ffffff\"/><rect x=\"517\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><svg version=\"1.0\" id=\"Layer_1\" x=\"678\" y=\"678\" viewBox=\"0 0 700 700\" enable-background=\"new 0 0 700 700\" xml:space=\"preserve\" width=\"644\" height=\"644\" shape-rendering=\"auto\">\n<g>\n\t<g>\n\t\t<polygon fill=\"#000000\" points=\"115.7,584.3 115.7,414.3 87.5,414.3 87.5,584.3 87.5,612.5 115.7,612.5 285.7,612.5 285.7,584.3       \"/>\n\t\t<polygon fill=\"#000000\" points=\"115.7,115.7 285.7,115.7 285.7,87.5 115.7,87.5 87.5,87.5 87.5,115.7 87.5,285.7 115.7,285.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,115.7 584.3,285.7 612.5,285.7 612.5,115.7 612.5,87.5 584.3,87.5 414.3,87.5 414.3,115.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,584.3 414.3,584.3 414.3,612.5 584.3,612.5 612.5,612.5 612.5,584.3 612.5,414.3     584.3,414.3   \"/>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M246.1,274c0-3.3-1.2-6-3.6-8.1c-2.4-2-6.5-3.9-12.5-5.7c-10.4-3-18.2-6.5-23.5-10.6     c-5.3-4.1-7.9-9.7-7.9-16.8s3-13,9.1-17.5c6.1-4.5,13.8-6.8,23.3-6.8c9.6,0,17.3,2.5,23.4,7.6c6,5.1,8.9,11.3,8.7,18.8l-0.1,0.4     h-16.9c0-4-1.3-7.3-4-9.8c-2.7-2.5-6.5-3.7-11.3-3.7c-4.7,0-8.3,1-10.8,3.1s-3.8,4.7-3.8,7.9c0,2.9,1.4,5.4,4.1,7.3     c2.7,1.9,7.4,3.9,14.1,6c9.6,2.7,16.9,6.2,21.8,10.6c4.9,4.4,7.4,10.1,7.4,17.3c0,7.4-2.9,13.3-8.8,17.6     c-5.9,4.3-13.6,6.5-23.3,6.5c-9.5,0-17.7-2.4-24.8-7.3c-7.1-4.9-10.5-11.7-10.3-20.5l0.1-0.4h17c0,5.2,1.6,9,4.7,11.4     c3.2,2.4,7.6,3.6,13.2,3.6c4.7,0,8.4-1,10.9-2.9C244.9,279.9,246.1,277.3,246.1,274z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M342.4,267.1l0.1,0.4c0.2,9.4-2.7,16.8-8.6,22.3c-5.9,5.5-14,8.2-24.5,8.2c-10.5,0-19-3.4-25.5-10.1     s-9.8-15.4-9.8-26v-17.3c0-10.6,3.2-19.2,9.6-26c6.4-6.8,14.7-10.2,24.9-10.2c10.8,0,19.2,2.8,25.2,8.3c6.1,5.5,9,13,8.8,22.6     l-0.1,0.4h-17c0-5.7-1.4-10.1-4.1-13.2c-2.7-3.1-7-4.6-12.8-4.6c-5.2,0-9.4,2.1-12.4,6.4c-3.1,4.2-4.6,9.6-4.6,16.2v17.4     c0,6.6,1.6,12.1,4.8,16.3c3.2,4.2,7.6,6.4,13.1,6.4c5.5,0,9.5-1.5,12.1-4.4c2.6-2.9,3.9-7.3,3.9-13.1H342.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M401.6,278h-30.5l-5.9,18.8h-17.6l29.9-87h17.9l29.8,87h-17.6L401.6,278z M375.4,264.3h21.9l-10.8-34.2     h-0.4L375.4,264.3z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M503.6,296.7h-17.4l-35.1-59.4l-0.4,0.1v59.4h-17.4v-87h17.4l35.1,59.4l0.4-0.1v-59.3h17.4V296.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M224.4,329.3l51.6,131.6h0.7l51.6-131.6h28v162h-21.9v-64.1l2.2-65.9l-0.6-0.1l-52.5,130.1h-14.6     l-52.3-129.8l-0.6,0.1l2.1,65.5v64.1h-21.9v-162H224.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M492.7,416.2h-74.2v57.9h85.6v17.2H396.6v-162h106.3v17.2h-84.4V399h74.2V416.2z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg></svg>\n\n</svg>\n"
}
```

_Response (404 - NOTFOUND)_

```json
{
  "msg": "'Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### POST /generate-midtrans-token

> Generate midtrans token

_Request Header_

- accest_token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MDI3NTEzfQ.ApoFtdtNHue9to1hL_rU-iIQn01VjQHHcN0_wGUiJKw

_Request Body_

```json
{
  "price": 500000
}
```

_Response (201)_

```json
{
  "token": "a3a331f1-2ec2-4dfd-97a6-2e64fba40202",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/a3a331f1-2ec2-4dfd-97a6-2e64fba40202"
}
```

_Response (401 - Unauthenticated)_

```json
{
  "msg": "Unauthenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### GET /bookings

> Read all already logged in user booking tours

_Request Header_

- header : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MDI3NTEzfQ.ApoFtdtNHue9to1hL_rU-iIQn01VjQHHcN0_wGUiJKw

_Request Body_
-no need-

_Response (200)_

```json
{
    "bookings": [
        {
            "id": 1,
            "TourId": 6,
            "UserId": 1,
            "price": 500000,
            "paid": true,
            "Tour": {
                "id": 6,
                "name": "Bukit Pergasingan",
                "duration": 5,
                "participant": 10,
                "slot": 10,
                "difficulty": "Normal",
                "ratingsAverage": 5,
                "price": 500000,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "imageCover": "https://images.unsplash.com/photo-1654009083264-66f556c803cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
                "startDates": "2024-05-15T00:00:00.000Z",
                "image": "https://images.unsplash.com/photo-1654009083264-66f556c803cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
                "startLocation": "Mataram",
                "lat": "-8.34518780572459",
                "lng": "116.5330629732891",
                "guides": "Tod Munt"
            }
        },
        {
            "id": 2,
            "TourId": 2,
            "UserId": 1,
            "price": 500000,
            "paid": true,
            "Tour": {
                "id": 2,
                "name": "Mandalika",
                "duration": 4,
                "participant": 10,
                "slot": 10,
                "difficulty": "Normal",
                "ratingsAverage": 5,
                "price": 500000,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "imageCover": "https://images.unsplash.com/photo-1595775716500-6c9238f71fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                "startDates": "2024-03-17T00:00:00.000Z",
                "image": "http://dummyimage.com/189x100.png/dddddd/000000",
                "startLocation": "Mataram",
                "lat": "-8.5989050279824",
                "lng": "116.15223185827216",
                "guides": "Sharona Tinwell"
            }
        }
        ...
    ]
}
```

_Response (401 - Unauthenticated)_

```json
{
  "msg": "Unauthenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### POST /users/google-sign-in

> Login Users via google mail

_Request Header_

- header : -

_Request Body_

- body : -

_Response (200)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg1OTEwMzE5fQ.cSGtayeQI1lvbSnpgLbACNShaFcmgPWQh7i5zc-IsBI"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---

### POST /bookings/:tourId

> Add Booking based on logged in user

_Request Header_

- accest_token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MDI3NTEzfQ.ApoFtdtNHue9to1hL_rU-iIQn01VjQHHcN0_wGUiJKw

_Request params_
-tourId: 5

_Request Body_

```json
{
  "price": 1000000,
  "paid": true
}
```

_Response (201)_

```json
{
  "newBooking": {
    "id": 4,
    "TourId": 5,
    "UserId": 2,
    "price": 1000000,
    "paid": true,
    "updatedAt": "2023-06-07T22:22:30.282Z",
    "createdAt": "2023-06-07T22:22:30.282Z"
  }
}
```

_Response (401 - Unauthenticated)_

```json
{
  "msg": "Unauthenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "msg": "Tour already booked"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "msg": "'Internal server error'"
}
```

---
