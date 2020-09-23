import React from "react"
import Banner from "./Banner"
import Card from "./Card"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/f1a011a3-6e00-4058-a755-faa6ad46be14.jpg?im_w=960"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$100/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e8f819e7-3697-4e56-82c7-09af4b6cceae.jpg?im_w=960"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$500/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a17fa3f0-6cac-4110-990c-bd93995c48d9.jpg?im_w=960"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="$120/night"
        />
      </div>
    </div>
  )
}

export default Home
