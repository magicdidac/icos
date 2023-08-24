import { Box } from "@mui/material"

export const ImagesContainer = () => {

  return (
    <Box display='grid' gridTemplateColumns='2fr 1fr' gap='1rem' marginTop='1rem' height='calc(100vh - 9rem)'>
      <Box
        border='1px solid #6daaca'
        borderRadius='.5rem'
        padding='1rem'
      >
        Box1
      </Box>
      <Box
        border='1px solid #6daaca'
        borderRadius='.5rem'
        padding='1rem'
      >
        Box2
      </Box>
    </Box>
  )
}