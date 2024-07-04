interface Config {
   serverUrl: string
   frontUrl: string
}

let config: Config
const ENV: string = 'prod'

if (ENV === 'dev') {
   config = {
      serverUrl: "http://localhost:8011/api/v1",
      frontUrl: "http://localhost:5174"
   }
} else {
   config = {
      serverUrl: "https://absent-api.gastrolink-resto.com/api/v1",
      frontUrl: "",
   }
}

export default config