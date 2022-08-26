import axios from "axios"

export const useStringReverser = () => {
  const reverseString = async inputText => {
    const response = await axios.post("/api/reverse", { inputText })
    console.log(response.data)
    return response.data.outputText
  }

  return {
    reverseString
  }
}
