import axios from "axios";

export const useHandleApi = async (): Promise<string> => {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=courage"
    );
    return response.data[0].quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Failed to fetch quote";
  }
};
