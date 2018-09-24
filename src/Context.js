// @flow

import React from 'react'
import { makeEdgeContext, type EdgeContext } from 'edge-core-js'

export const edgeContextOptions = {
  apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0'
}

export type Props = {
  context: EdgeContext | null,
  onNewContext: (context: EdgeContext) => mixed
}
export class Context extends React.Component<Props> {
  render () {
    return null
  }

  componentDidMount () {
    console.log('<Context /> componentDidMount')
    const { onNewContext } = this.props

    makeEdgeContext(edgeContextOptions).then(onNewContext)
  }

  componentDidUpdate () {
    console.log('<Context /> componentDidUpdate')
  }
}
