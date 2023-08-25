// import { Button, Dialog, DialogActions, DialogContent, ThemeProvider } from "@mui/material"
import { useState } from "react"
import { IImageFile } from "../types"
// import { ImageDropper } from "./ImageDropper"
import { uploadImage } from "../core"
// import { webTheme } from "../theme"

interface IICOSDialogProps {
  open: boolean
  route: string
  onClose: () => void
  onSubmitImage: (url: string) => void
}

export default ({ open, route, onClose, onSubmitImage }: IICOSDialogProps) => {
  const [submitting, setSubmitting] = useState(false)
  const [image, setImage] = useState<IImageFile>()

  const onClearAll = () => {
    onClose()
    setSubmitting(false)
    setImage(undefined)
  }

  const handleClose = () => {
    if (submitting) return

    onClearAll()
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    if (image) {
      const uploadedImage = await uploadImage(route, image)
      onSubmitImage(uploadedImage)
      onClearAll()
    } else {
      setSubmitting(false)
    }
  }

  return (<>Dialog</>)
  // return (
  //   <ThemeProvider theme={webTheme}>
  //     <Dialog
  //       open={open}
  //       onClose={handleClose}
  //       fullWidth
  //       maxWidth='sm'
  //     >
  //       <DialogContent style={{ overflow: 'hidden' }}>
  //         <ImageDropper image={image} onChangeImage={setImage} />
  //       </DialogContent>
  //       <DialogActions>
  //         <Button variant='text' onClick={handleClose}>Cancel</Button>
  //         <Button disabled={submitting} variant='contained' onClick={handleSubmit}>Subir image</Button>
  //       </DialogActions>
  //     </Dialog>
  //   </ThemeProvider>
  // )
}