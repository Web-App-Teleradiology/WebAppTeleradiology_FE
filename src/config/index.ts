// export const Link = { Api: "http://localhost:3000" };


const URL = process.env.REACT_APP_BACKEND_LINK
console.log("url", URL)
export const Link = { Api: URL };