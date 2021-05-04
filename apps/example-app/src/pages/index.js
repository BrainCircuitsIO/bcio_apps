import * as React from "react"
import axios from 'axios'

import Layout from "../components/layout"
import config from "../../../../config.json";

const IndexPage = () => {

  const callFunction = () => {
    axios({
      method: 'get',
      crossDomain: true,
      url: 'https://api.zetta.ai/wclee/info/api/v2/datastacks',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + config["FANC_AUTH_TOKEN"]
      }
    }).then((response) => {
      // show response in console: In Chrome with Ctrl-Shift-J
      console.log('reponse', response)
    });
  }

  return (<Layout>
    <button onClick={callFunction}>Press me</button>
  </Layout>)

}

export default IndexPage
