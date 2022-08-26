import axios from "axios"

export const useStringReverser = () => {
  const reverseString = async inputText => {
    const response = await axios.post("/api/reverse", { inputText })
    return response.data.outputText
  }

  return {
    reverseString
  }
}
