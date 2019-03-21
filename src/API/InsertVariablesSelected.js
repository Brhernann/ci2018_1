import axios from "axios";
import qs from "qs";
import { OHWS } from "../constants";
import { token } from "../jwt";

export default async data => {
  return await axios.post(
    OHWS.InsertVariablesSelected,
    qs.stringify({
      Variable_1: parseInt(data[0].Factor.split("_")[1], 10),
      Variable_2: parseInt(data[1].Factor.split("_")[1], 10),
      Variable_3: parseInt(data[2].Factor.split("_")[1], 10),
      Variable_4: parseInt(data[3].Factor.split("_")[1], 10),
      Variable_5: parseInt(data[4].Factor.split("_")[1], 10),
      Variable_6: parseInt(data[5].Factor.split("_")[1], 10),
      Variable_7: parseInt(data[6].Factor.split("_")[1], 10),
      Variable_8: parseInt(data[7].Factor.split("_")[1], 10),
      Variable_9: parseInt(data[8].Factor.split("_")[1], 10),
      Variable_10: parseInt(data[9].Factor.split("_")[1], 10),
      Variable_11: parseInt(data[10].Factor.split("_")[1], 10),
      Variable_12: parseInt(data[11].Factor.split("_")[1], 10),
      Variable_13: parseInt(data[12].Factor.split("_")[1], 10),
      Variable_14: parseInt(data[13].Factor.split("_")[1], 10),
      Variable_15: parseInt(data[14].Factor.split("_")[1], 10),
      Variable_16: parseInt(data[15].Factor.split("_")[1], 10),
      //   Variable_17: parseInt(data[16].Factor.split("_")[1], 10),
      Answer_1: data[0].Answer,
      Answer_2: data[1].Answer,
      Answer_3: data[2].Answer,
      Answer_4: data[3].Answer,
      Answer_5: data[4].Answer,
      Answer_6: data[5].Answer,
      Answer_7: data[6].Answer,
      Answer_8: data[7].Answer,
      Answer_9: data[8].Answer,
      Answer_10: data[9].Answer,
      Answer_11: data[10].Answer,
      Answer_12: data[11].Answer,
      Answer_13: data[12].Answer,
      Answer_14: data[13].Answer,
      Answer_15: data[14].Answer,
      Answer_16: data[15].Answer
      //   Answer_17: data[16].Answer
    }),
    {
      headers: {
        Authorization: "JERA " + token()
      }
    }
  );
};
