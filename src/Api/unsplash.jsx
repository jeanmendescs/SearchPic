//codigos relacionados ao unsplash e config do axios
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gY0CIxkE2W4qASQZ2OpmOB6VcaE9DoCL2qj-N8dzMd4",
  },
});
