import { category } from "./category/category";
import axios from "axios";

export const useHandleApi = async () => {
  const shuffleCategory = () => {
    const randomIndex = Math.floor(Math.random() * category.length);
    return category[randomIndex];
  };

  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/quotes?category=${shuffleCategory()}`,
      {
        headers: {
          "X-Api-Key": process.env.API_KEY,
        },
      }
    );
    return response.data[0].quote;
  } catch (error) {
    console.error("Error while fetching quote:", error);
    return "Failed to fetch quote";
  }
};
