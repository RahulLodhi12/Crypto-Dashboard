import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ marginTop: '3px !important', marginBottom: '0px !important', color:"#FFFFFF" }}>
                    {this.props.coinName}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-black text-center  m-3"
                        style={{ width: "13rem", backgroundColor: 'transparent', marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{  }}>Market Cap Rank</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#000000" }}>
                                #{this.props.mRank} 
                            </p>
                        </div>
                    </div>
                    <div className="card text-black text-center  m-3"
                        style={{ width: "13rem", backgroundColor: 'transparent',shadowOpacity:0, marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{  }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00000" }}>
                                ₹{this.props.ath}
                            </p>
                        </div>
                    </div>
                    {/* <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                ${this.props.atl}
                            </p>
                        </div>
                    </div> */}

                    <div className="card text-black text-center  m-3"
                        style={{ width: "13rem", backgroundColor: 'transparent',shadowOpacity: 0, marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{  }}>Positive Sentiments </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#000000" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-black text-center  m-3"
                        style={{ width: "13rem", backgroundColor: 'transparent', marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{  }}> High 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#000000" }}>
                                ₹{this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-black text-center  m-3"
                        style={{ width: "13rem", backgroundColor: 'transparent', marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{  }}> Low 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: '#000000' }}>
                                ₹{this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="text-center"
                        style={{  overflow: 'visible', height: '2px', marginTop: "1%", color: "#000000"}}> <h6>Current
                        Price</h6> </div>
                    <div style={{
                        fontSize: '55px',
                        fontWeight: '700', color: "#1A4B8E", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        ₹{this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection