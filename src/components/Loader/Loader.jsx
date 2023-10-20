import { ImageList, ImageListItem, Skeleton } from '@mui/material'

const Loader = () => {
  return (
    <ImageList cols={5} gap={10}>
      {Array.from({ length: 30 }).map((_, index) => (
        <ImageListItem key={index}>
          <Skeleton animation="wave" variant="rect" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export { Loader }