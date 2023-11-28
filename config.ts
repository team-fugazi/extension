import process from "process";

const environment = process.env.REACT_APP_NODE_ENV || "development";

const development = {
  userService: {
    url: process.env.REACT_APP_CHAT_URL || "http://localhost:8085",
  },
  redditService: {
    url: process.env.REACT_APP_SHIP_URL || "http://localhost:8087",
  },
  reportsService: {
    url: process.env.REACT_APP_NOTIFICATION_URL || "http://localhost:8082",
  },
};

const docker = {
  userService: {
    url: process.env.REACT_APP_CHAT_URL || "http://localhost:8085",
  },
  redditService: {
    url: process.env.REACT_APP_SHIP_URL || "http://localhost:8087",
  },
  reportsService: {
    url: process.env.REACT_APP_NOTIFICATION_URL || "http://localhost:8082",
  },
};

const production = {
  userService: {
    url: process.env.REACT_APP_CHAT_URL || "http://localhost:8085",
  },
  redditService: {
    url: process.env.REACT_APP_SHIP_URL || "http://localhost:8087",
  },
  reportsService: {
    url: process.env.REACT_APP_NOTIFICATION_URL || "http://localhost:8082",
  },
};

//
const config = { production, docker, development };
const configuration = config[environment as keyof typeof config];
export { configuration };
