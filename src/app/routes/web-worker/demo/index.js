import React, { Component } from 'react'
import H1 from '../../../blocks/title'
import Container from '../../../blocks/container'
import { Label, Input, Canvas } from './style'

export default class Demo extends Component {
  componentDidMount() {
    const input = document.getElementById('input')
    const preview = document.getElementById('preview')
    const previewCtx = preview.getContext('2d')

    // Handles image loading
    input.onchange = (e) => {
      const file = e.target.files[0]

      createImageBitmap(file)
        .then((bitmap) => {
          preview.height = bitmap.height
          preview.width = bitmap.width
          previewCtx.drawImage(bitmap, 0, 0)

          const imageData = previewCtx.getImageData(0, 0, preview.width, preview.height)
          console.log(imageData)

          sendData()
        })
    }

    // 🚀
    const worker = new Worker('/worker.js')

    // Sends image data to Worker to apply a filter.
    function sendData() {
      const imageData = previewCtx.getImageData(0, 0, preview.width, preview.height)
      worker.postMessage(imageData, [imageData.data.buffer])
    }

    // Listens messages from worker.
    worker.onmessage = (message) => {
      const imageData = message.data
      previewCtx.putImageData(imageData, 0, 0)
    }
  }

  render() {
    return (
      <Container>
        <H1>Demo</H1>
        <Input type="file" accept="image/*" name="input" id="input" onChange={this.onFilePicked} />
        <Label htmlFor="input">Choose File</Label>

        <Canvas id="preview" />
      </Container>
    )
  }
}
