import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async (data, id) => {
  return await axios.post(
    OHWS.InsertAnswers_to_question,
    qs.stringify({
      Answer: data,
      Question_ID: id
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
