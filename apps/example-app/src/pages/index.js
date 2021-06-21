import * as React from "react"
import axios from 'axios'

import Layout from "../components/layout"
import config from "../../../../config.json";
import { Link } from "gatsby";

const IndexPage = () => {

  const callFunction = () => {
    axios({
      method: 'get',
      // crossDomain: false,
      allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
      credentials: true,
      enablePreflight: true,
      withCredentials: false,
      url: 'https://wclee.api.zetta.ai/wclee/info/api/v2/datastacks',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + config["FANC_AUTH_TOKEN"]
      }
    }).then((response) => {
      // show response in console: In Chrome with Ctrl-Shift-J
      console.log('reponse', response)
    });
  }

  return (<Layout>
    <button onClick={callFunction}>Press me and inspect browser console</button>
    <br />
    <Link to="/testd3/">D3 Example</Link>
  </Layout>)

}

export default IndexPage
