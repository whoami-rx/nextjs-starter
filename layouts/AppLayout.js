import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Head from 'next/head'

const AppLayout = (props) => (
  <React.Fragment>
    <Head>
      <title>React Starter</title>
    </Head>
    <Header />
    <main>
      { props.children }
    </main>
  </React.Fragment>
)

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout
