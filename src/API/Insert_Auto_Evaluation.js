import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async data => {
  return await axios.post(
    OHWS.Insert_Auto_Evaluation,
    qs.stringify({
      Sector_ID: data.label_5,
      Position: data.label_11,
      Enterprise_Name: data.label_14
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
