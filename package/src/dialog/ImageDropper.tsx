import { Upload } from "@mui/icons-material"
import { Button, Stack, Typography } from "@mui/material"
import { IImageFile } from "../types"
import { DragEvent, useRef, useState } from "react"

interface IImageDropperProps {
  image: IImageFile | undefined
  onChangeImage: (image: IImageFile | undefined) => void
}

export const ImageDropper = ({ image, onChangeImage }: IImageDropperProps) => {

  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const openInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onFileSelect = (files: FileList | null) => {
    if (!files) return
    if (files.length === 0) return
    const image = files[0]

    if (image.type.split('/')[0] !== 'image') return
    onChangeImage({
      name: image.name,
      url: URL.createObjectURL(image)
    })
  }

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
    event.dataTransfer.dropEffect = "copy"
  }

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    onFileSelect(event.dataTransfer.files)
  }

  if (!image) {
    return (
      <div
        style={{
          border: '2px dashed #6daaca',
          borderRadius: '1rem',
          width: '100%',
          height: '300px',
          cursor: 'pointer',
        }}
        onClick={openInput}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Stack>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            height='100%'
          >
            {isDragging ?
              <Typography variant="body1">Drop the image here</Typography>
              : <>
                <Upload color='primary' fontSize='large' />
                <Typography variant='body1'>Drag and drop your image here...</Typography>
                <Typography variant='mini'>Or click to browse it...</Typography>
              </>
            }
          </Stack>
        </Stack>
        <input style={{ display: 'none' }} type='file' ref={fileInputRef} accept="image/png, image/jpeg" onChange={(event) => onFileSelect(event.target.files)} />
      </div>
    )
  } else {
    return (
      <div
        style={{
          borderRadius: '1rem',
          width: '100%',
          height: '300px',
        }}
      >
        <Stack direction='column' alignItems='end'>
          <Button size='small' style={{ padding: '0' }} onClick={() => onChangeImage(undefined)}>x</Button>
          <div
            style={{
              width: '100%',
              height: '250px'
            }}
          >
            <img alt={image.name} src={image.url} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </Stack>
      </div>
    )
  }
}