import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async data => {
  return await axios.post(
    OHWS.InsertNatural_person,
    qs.stringify({
      Sector_ID: data.label_5,
      Name: data.label_1,
      Position: data.label_2
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
