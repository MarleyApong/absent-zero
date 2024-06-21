interface Config {
   serverUrl: string
   frontUrl: string
}

let config: Config
const ENV: string = 'dev'

if (ENV === 'dev') {
   config = {
      serverUrl: "http://localhost:8011/api/v1",
      frontUrl: "http://localhost:5174"
   }
} else {
   config = {
      serverUrl: "",
      frontUrl: "",
   }
}

export default config