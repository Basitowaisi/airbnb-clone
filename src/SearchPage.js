import { Button } from "@material-ui/core"
import React from "react"
import "./SearchPage.css"
import SearchResult from "./SearchResult"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august · 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button varaint="outlined">Type of Place</Button>
        <Button varaint="outlined">Price</Button>
        <Button varaint="outlined">Rows and beds</Button>
        <Button varaint="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2558322e-6a7a-4dc4-8dd7-338a2d1b880d.jpg?im_w=960"
        title="NEW - Charleston Home w/ Rooftop Deck!"
        star={4.8}
        total="$990 total"
        price="$99 / night"
        location="Entire house in Charleston"
        description="4 guests · 1 bedroom · 1 bed · 5 bathrooms"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/635d2ff0-906f-4fe9-8c53-6fc18fc969f6.jpg?im_w=960"
        title="NEW - Charleston Home w/ Rooftop Deck!"
        star={4.8}
        total="$990 total"
        price="$99 / night"
        location="Entire house in Charleston"
        description="4 guests · 1 bedroom · 1 bed · 5 bathrooms"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2558322e-6a7a-4dc4-8dd7-338a2d1b880d.jpg?im_w=960"
        title="NEW - Charleston Home w/ Rooftop Deck!"
        star={4.8}
        total="$990 total"
        price="$99 / night"
        location="Entire house in Charleston"
        description="4 guests · 1 bedroom · 1 bed · 5 bathrooms"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/635d2ff0-906f-4fe9-8c53-6fc18fc969f6.jpg?im_w=960"
        title="NEW - Charleston Home w/ Rooftop Deck!"
        star={4.8}
        total="$990 total"
        price="$99 / night"
        location="Entire house in Charleston"
        description="4 guests · 1 bedroom · 1 bed · 5 bathrooms"
      />
    </div>
  )
}

export default SearchPage
