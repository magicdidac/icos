import { Button, Stack } from "@mui/material"
import { ImageDialog } from "./ImageDialog"
import { useState } from "react"

export const Actions = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleSubmit = async () => {
    console.log('Submitting...')
  }

  return (
    <Stack direction='row' justifyContent='end' gap='1rem'>
      <Button variant='contained' onClick={() => setOpenDialog(true)}>+ Añadir Imagen</Button>
      <ImageDialog open={openDialog} onClose={() => setOpenDialog(false)} onSubmitImage={handleSubmit} />
    </Stack>
  )
}