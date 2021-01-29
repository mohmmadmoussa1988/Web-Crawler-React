import axios from "axios";
import { serverUrl } from "../constants/index";

export const requestSearchApi = (SearchTerm) => {
  return new Promise(async (resolve, reject) => {
    try {
      const json = JSON.stringify({ SearchTerm: SearchTerm });
      const res = await axios.post(serverUrl + "search", json, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      resolve(res);
    } catch (err) {
      resolve(err.message);
    }
  });
};

export const getAnalysisApi = (timestamp) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        serverUrl + "search/analyze",
        { params: { timestamp: timestamp, count: 5 } },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      resolve(res);
    } catch (err) {
      resolve(err.message);
    }
  });
};
