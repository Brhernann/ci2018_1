import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async data => {
  return await axios.post(
    OHWS.InsertNatural_person,
    qs.stringify({
      Sector_ID: data.label_5,
      Name: data.label_12,
      Position: data.label_11,
      Mail: data.label_13
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
