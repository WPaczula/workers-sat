onmessage = (d) => {
  console.log('🚀')
  const imageData = d.data
  const w = imageData.width
  const h = imageData.height
  const { data } = imageData

  console.log(data)

  // Iterate pixel rows and columns to change red color of each.
  for (let x = 0; x < w; x += 1) {
    for (let y = 0; y < h; y += 1) {
      const index = (x + (y * w)) * 4
      const mean = (data[index] + data[index + 1] + data[index + 2]) / 3
      data[index] = mean
      data[index + 1] = mean
      data[index + 2] = mean
    }
  }

  postMessage(imageData, [imageData.data.buffer])
}
