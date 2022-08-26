import packageJson from "../package.json"
import { StyledVersion } from "./Verson.styles"

export const Version = () => {
  return (
    <StyledVersion>version: {packageJson.version}</StyledVersion>
  )
}
