const prodUrl = "https://fraats-production.up.railway.app";
const localUrl = "http://localhost:3005";

const backendUrl = process.env.NODE_ENV === "production" ? localUrl : prodUrl;

export default backendUrl;
