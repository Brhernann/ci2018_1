import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async data => {
  console.log(data);
  return await axios.post(
    OHWS.InsertRelationShip_Person,
    qs.stringify({
      Auto_Evaluation_ID: data.Auto_Evaluation_ID,
      Variables_Selected_ID: data.Variables_Selected_ID,
      Answer_To_Question_ID: data.Answer_To_Question_ID
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
