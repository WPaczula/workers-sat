import React, { Component } from 'react'
import H1 from '../../../blocks/title'
import Container from '../../../blocks/container'
import { Label, Input, Canvas } from './style'

export default class Demo extends Component {
  componentDidMount() {
    const input = document.getElementById('input')
    const preview = document.getElementById('preview')
    const previewCtx = preview.getContext('2d')
    const worker = new Worker('/worker.js')

    /** Sends image data to Worker to apply a filter. */
    function applyFilter() {
      const imageData = previewCtx.getImageData(0, 0, preview.width, preview.height)
      worker.postMessage(imageData, [imageData.data.buffer])
    }

    /**
     * Listens messages from worker.
     * In this case: puts image data back to the canvas.
     * @param {!Object} d Data sent by the worker.
     */
    worker.onmessage = (d) => {
      const imageData = d.data
      previewCtx.putImageData(imageData, 0, 0)
    }
    /**
     * Processes image when added to input file. Including:
     *   1. Resizing and drawing image in cavas.
     *   2. Applying a filter (using a web worker).
     * @param {!Event} e On change event on the input file.
     */
    input.onchange = (e) => {
      const file = e.target.files[0]
      /**
       * Creates an ImageBitmap from loaded map.
       * Once loaded: the image bitmap is added to canvas and a filter is applied.
       * @param {!ImageBitmap} bitmap of the image loaded on the input field.
       */
      createImageBitmap(file).then((bitmap) => {
        preview.height = bitmap.height
        preview.width = bitmap.width
        previewCtx.drawImage(bitmap, 0, 0)
        applyFilter()
      })
    }
  }

  render() {
    return (
      <Container>
        <H1>Czym to w ogóle jest?</H1>
        <Input type="file" accept="image/*" name="input" id="input" onChange={this.onFilePicked} />
        <Label htmlFor="input">Choose File</Label>

        <Canvas id="preview" />
      </Container>
    )
  }
}
