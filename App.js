// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { type EdgeContext } from 'edge-core-js'

import { Context } from './src/Context.js'

type Props = {}
type State = { context: EdgeContext | null }
export class App extends React.Component<Props, State> {
  state = { context: null }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello, World</Text>
        <Context
          context={this.state.context}
          onNewContext={this.onNewContext}
        />
      </View>
    )
  }

  onNewContext = (context: EdgeContext) => {
    this.setState(state => ({ context }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
