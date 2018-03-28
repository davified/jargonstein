import React, { Component } from "react";
import jargonList from "../seed-data/jargonList";
import NewsListings from "./NewsListings";

class Jargon extends Component {
  constructor() {
    super();
    this.state = {
      jargonList: jargonList,
      index: 0,
      articles: []
    };
    this.generateNewJargon = this.generateNewJargon.bind(this);
  }

  componentDidMount() {
    this.generateNewJargon();
  }

  render() {
    console.log("in jargon / render");
    console.log(this.state.jargonList[this.state.index].jargon);
    console.log(this.state.jargonList[this.state.index].explanation);
    console.log(this.state.articles);
    return (
      <div>
        <NewsListings
          jargonList={this.state.jargonList}
          jargonIndex={this.state.index}
          articles={this.state.articles}
          onClick={this.generateNewJargon}
        />
      </div>
    );
  }

  generateNewJargon() {
    console.log("in jargon / generate new jargon");
    const index = Math.floor(Math.random() * this.state.jargonList.length);
    console.log("index: ", index);
    const jargon = this.state.jargonList[index].jargon.toUpperCase();

    let searchJargon = jargon + "&";
    console.log("In jargon / fetch.. to generate articles for " + searchJargon);
    const url = "https://newsapi.org/v2/everything?q=";
    const apiKey = "1ac76a8ce51442738b51ba627fd92210";
    const pageSize = "5&";
    const sources =
      [
        "bloomberg",
        "new-york-times",
        "new-scientist",
        "axios",
        "techradar",
        "the-guardian-uk",
        "the-telegraph",
        "financial-post",
        "the-economist",
        "reuters",
        "national-geographic",
        "australian-financial-review",
        "ars-technica",
        "fortune",
        "recode"
      ].join(",") + "&";

    const apiEndpoint =
      url +
      searchJargon +
      "from=2010-01-01&" +
      "sortBy=relevancy&" +
      "pageSize=" +
      pageSize +
      "sources=" +
      sources +
      "apiKey=" +
      apiKey;

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(json => json.articles)
      .then(articles =>
        this.setState({
          jargonList: this.state.jargonList,
          index: index,
          articles: articles
        })
      )
      .catch(error => console.log(error));
  }
}

export default Jargon;