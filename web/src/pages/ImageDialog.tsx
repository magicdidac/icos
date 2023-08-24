import { Button, Dialog, DialogActions, DialogContent } from "@mui/material"
import { useState } from "react"
import { IImageFile } from "../types"
import { ImageDropper } from "./ImageDropper"

interface IImageDialogProps {
  open: boolean
  onClose: () => void
  onSubmitImage: () => Promise<void>
}

export const ImageDialog = ({ open, onClose, onSubmitImage }: IImageDialogProps) => {
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
    await onSubmitImage()
    onClearAll()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='sm'
    >
      <DialogContent style={{ overflow: 'hidden' }}>
        <ImageDropper image={image} onChangeImage={setImage} />
      </DialogContent>
      <DialogActions>
        <Button variant='text' onClick={handleClose}>Cancel</Button>
        <Button disabled={submitting} variant='contained' onClick={handleSubmit}>Subir image</Button>
      </DialogActions>
    </Dialog>
  )
}