import React from 'react'
import "./style.scss"
import Card from "../../UI/Card/index"

const index = () => {

  const users = [
    {
      "id": 1,
      "email": "johnny@mail.com",
      "password": "changeme",
      "name": "Johnny",
      "role": "customer",
      "avatar": "https://picsum.photos/640/640?r=1511",
      "creationAt": "2023-04-27T13:44:11.000Z",
      "updatedAt": "2023-04-27T16:11:04.000Z",
      status: true
    },

    {
      "id": 2,
      "email": "maria@mail.com",
      "password": "12345",
      "name": "Maria",
      "role": "customer",
      "avatar": "https://picsum.photos/640/640?r=247",
      "creationAt": "2023-04-27T13:44:11.000Z",
      "updatedAt": "2023-04-27T13:44:11.000Z",
      status: false
    },

    {
      "id": 3,
      "email": "admin@mail.com",
      "password": "admin123",
      "name": "Admin",
      "role": "admin",
      "avatar": "https://picsum.photos/640/640?r=7897",
      "creationAt": "2023-04-27T13:44:11.000Z",
      "updatedAt": "2023-04-27T13:44:11.000Z",
      status: false
    },

    {
      "id": 4,
      "email": "mister@mister.com",
      "password": "123456789",
      "name": "Mister M",
      "role": "admin",
      "avatar": "https://loremflickr.com/320/240/man",
      "creationAt": "2023-04-27T13:46:50.000Z",
      "updatedAt": "2023-04-27T13:46:50.000Z",
      status: true
    },

    {
      "id": 5,
      "email": "nico@gmail.com",
      "password": "1234",
      "name": "Nicolas",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
      "creationAt": "2023-04-27T13:51:20.000Z",
      "updatedAt": "2023-04-27T13:51:20.000Z",
      status: true
    },

    {
      "id": 6,
      "email": "nico@gmail.com",
      "password": "1234",
      "name": "Nicolas",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
      "creationAt": "2023-04-27T13:51:35.000Z",
      "updatedAt": "2023-04-27T13:51:35.000Z",
      status: false
    },

    {
      "id": 7,
      "email": "nico@gmail.com",
      "password": "1234",
      "name": "Nicolas",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
      "creationAt": "2023-04-27T13:52:35.000Z",
      "updatedAt": "2023-04-27T13:52:35.000Z",
      status: false
    },

    {
      "id": 8,
      "email": "123@gmail.com",
      "password": "123456",
      "name": "123",
      "role": "customer",
      "avatar": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810",
      "creationAt": "2023-04-27T14:04:52.000Z",
      "updatedAt": "2023-04-27T14:04:52.000Z",
      status: true
    },

    {
      "id": 9,
      "email": "12345@gmail.com",
      "password": "12345",
      "name": "12345",
      "role": "customer",
      "avatar": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810",
      "creationAt": "2023-04-27T14:33:44.000Z",
      "updatedAt": "2023-04-27T14:33:44.000Z",
      status: true
    },

    {
      "id": 10,
      "email": "nico@gmail.com",
      "password": "1234",
      "name": "Nicolas",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
      "creationAt": "2023-04-27T14:39:59.000Z",
      "updatedAt": "2023-04-27T14:39:59.000Z",
      status: false
    }
  ]

  return (
    <div className='home'>
      <h2>Home page</h2>

      <div className="wrapper-card">
        {
        // users.lenght > 0 ?
         users.map((el) => {
            return <Card key={el.id} data={el} />
          }) 
          // : <h1>"Note found"</h1>
        }
      </div>
    </div>
  )

}

export default index