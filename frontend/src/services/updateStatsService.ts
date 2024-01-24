import axios from "axios";
import { UpdateData } from "@/interfaces";
const API_URL = "http://localhost:5000/api";

export const updateStats = async (token:any,operation:any,finalScore:any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const body = JSON.stringify({ finalScore, operation });

    const res = await axios.patch(`${API_URL}/updateuserstats`, body, config);

    
  } catch (error) {
    console.log(error);
  }
};
