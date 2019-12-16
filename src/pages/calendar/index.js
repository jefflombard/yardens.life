import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const CalendarPage = () => (
  <Layout>
    <section className="section">
      <div className="container content">
       Calendar Goes here!
      </div>
    </section>
  </Layout>
)

export default CalendarPage
