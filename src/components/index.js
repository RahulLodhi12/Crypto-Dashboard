import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";

const Convertor = () => {
  const [initialState, setState] = useState({
    currencies: ["USD", "EUR", "INR", "GBP", "KWD"],
    base: "USD",
    amount: "",
    convertTo: "INR",
    result: "",
    date: "",
  });

  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyconvertTor = async () => {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${base}`
          // `http://api.exchangeratesapi.io/v1/latest?access_key=9e5fc0ed5862f8cb5a6c54836b6cf9ac&base=${base}`
        );
        console.log("response==>", response);
        const date = response.data.date;
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        setState({
          ...initialState,
          result,
          date,
        });
      };
      getCurrencyconvertTor();
    }
  }, [amount, base, convertTo]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };

  return (
    <div className="container ml-5" style={{ backgroundColor: "transparent" }}>
      <div className="row">
        <div style={{ padding: "30px", backgroundColor: "transparent" }}>
          <Card
            title="CURRENCY CONVERTOR"
            bordered={false}
            style={{ width: 550 }}
          >
            <h5>
              {amount} {base} is equivalent to{" "}
            </h5>
            <h4>
              {amount === ""
                ? "0"
                : result === null
                  ? "Calculating ..."
                  : result}
              {convertTo}
            </h4>
            <p>As of {amount === "" ? "" : date === null ? "" : date}</p>
            <div className="row">
              <div className="col">
                <form className="form-inline mb-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={onChangeInput}
                    className="form-control-lg mx-1"
                  />
                  
                  {/* <div className="col-auto"> */}
                  <select
                    name="base"
                    value={base}
                    onChange={handleSelect}
                    className="form-control-lg"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  {/* </div> */}
                </form>
                <form className="form-inline mb-4">
                  {/* <div className="col-auto"> */}
                  <input
                    disabled={true}
                    value={
                      amount === ""
                        ? "0"
                        : result === null
                          ? "Calculating..."
                          : result
                    }
                    className="form-control-lg mx-1"
                  />
                  {/* </div> */}
                  {/* <div className="col-auto"> */}
                  <select
                    name="convertTo"
                    value={convertTo}
                    onChange={handleSelect}
                    className="form-control-lg"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  {/* </div> */}
                </form>
              </div>
              <div className="col-lg-2 align-self-center">
                <h1 onClick={handleSwap} style={{ cursor: "pointer" }}>
                  &#8595;&#8593;
                </h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Convertor;