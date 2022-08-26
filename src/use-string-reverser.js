export const useStringReverser = () => {
  const reverseString = inputText => {
    return Array.from(inputText).reverse().join("")
  }

  return {
    reverseString
  }
}
