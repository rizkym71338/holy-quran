export const calculateHeight = (
  originalWidth: number,
  originalHeight: number,
  targetWidth: number
) => {
  return (targetWidth * originalHeight) / originalWidth
}
