import { Container } from "@mui/material"
import { Actions } from "./Actions"
import { ImagesContainer } from "./ImagesContainer"

export const Home = () => {

  return (
    <Container style={{ marginTop: '1rem' }}>
      <Actions />
      <ImagesContainer />
    </Container>
  )
}