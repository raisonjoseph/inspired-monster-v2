import axios from "axios";
import constants from "../utils/constants";

export const getShots = async () =>
  await axios.get("https://api.dribbble.com/v2/user/shots", {
    headers: {
      Authorization: `Bearer ${constants.DRIBBBLE_AUTH_KEY}`,
    },
    params: {
      per_page: 50,
    },
  });
