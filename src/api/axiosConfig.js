import axios from "axios";

export default axios.create({
  baseURL: "https://e0dd-2405-4802-9134-71f0-12e-bada-d229-613a.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
