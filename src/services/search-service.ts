import axios from "axios";
import { BASE_URL } from "../utils/system";
import GitProfile from "../model/git-profile";

export async function getProfile(username: string) {

  try {
    const response = await axios.get(`${BASE_URL}/${username}`);

    if (response.status == 200) {
      const data = response.data;

      return GitProfile.fromData(data);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}
