import axios from "axios";

export default axios.create({
  baseURL:
    "https://e752-2405-4802-9134-71f0-54a1-aae6-1867-1ade.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
