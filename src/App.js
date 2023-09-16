import React, { Component } from 'react'
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';
import Convertor from './components';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {}
    }
  }
  fetchData = async () => {
    let data = await fetch('https://api.coingecko.com/api/v3/coins/'+ this.state.Id)
    let JsonData = await data.json()
    this.setState({ Id: this.state.Id, Data: JsonData })
  }

  handleSubmit = async (event)=>{
    console.log(event.target.value)
    await this.setState({Id: event.target.value, Data:this.state.Data})
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
    this.interval = setInterval(() => this.fetchData(), 2000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        
        <Header handle_Submit = {this.handleSubmit} />
        {/* <Rahul handle_Submit = {this.handleSubmit} /> */}
        <CardSection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["inr"] : ""}
          mRank={this.state.Data.market_data ? this.state.Data.market_data.market_cap_rank : ""}
          mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ? this.state.Data.market_data.ath.inr : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.inr : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["inr"] : ""}
          low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["inr"] : ""} />
          <ChartSection Id={this.state.Id} priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_percentage_24h_in_currency.inr : ""} 
        // BlockT = {this.state.Data.block_time_in_minutes}
        LastUp = {this.state.Data.last_updated}
        total_supply = {this.state.Data.market_data ? this.state.Data.market_data.total_supply : ""}
        marketCap24 = {this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h_in_currency.inr:""}
        MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.inr  : ""}
        TotVol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.inr  : ""}
        Circulating= {this.state.Data.market_data ? this.state.Data.market_data["circulating_supply"] : ""}
        twitterF = {this.state.Data.community_data ? this.state.Data.community_data.twitter_followers : ""}
        home = {this.state.Data.market_data ? this.state.Data.links["homepage"] : "" }
        // img = {this.state.Data.image ? this.state.Data.image["large"] : ""}
        />

        <div className="App">
          <Convertor />
        </div>
      </div>
    )
  }
}



