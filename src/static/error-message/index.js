import React from 'react'
import { ErrorPage, ErrorMessage } from './style'

export default function StaticErrorPage() {
  return (
    <ErrorPage>
      <ErrorMessage>
        Oh nooooo! Looks like aliens have stolen your signal!
      </ErrorMessage>
    </ErrorPage>
  )
}
