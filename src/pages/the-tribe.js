import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import SquiggleSeparator from '../components/SquiggleSeparator'
import {
  TheTribeTopParagraph,
  TheTribeBottomParagraph,
} from '../components/TheTribeParagraphs'
import TriberGrid from '../components/TriberGrid'
import VerticalSpacing from '../components/VerticalSpacing'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'
import Centered from '../components/Centered'

const NotFoundPage = () => (
  <Layout>
    <PageMeta
      title="The Tribe"
      description="Neontribe is a digital agency. Why neon? It’s the colour of tech. Why tribe? Individuals collaborating, hand-making useful tools that do a job of work."
    />
    <ConstrainedWidth>
      <Centered>
        <Heading level={1}>
          <Text weight={500} lineHeight={1.2} size="large">
            The Tribe
          </Text>
        </Heading>
        <VerticalSpacing size={2} />
        <TheTribeTopParagraph />
      </Centered>

      <SquiggleSeparator />
      <TriberGrid />
      <SquiggleSeparator />

      <Centered>
        <Heading level={2}>
          <Text weight={500} lineHeight={1.2} size="large">
            Join The Tribe
          </Text>
        </Heading>
        <VerticalSpacing size={2} />
        <TheTribeBottomParagraph />
        <VerticalSpacing size={5} />
        <ExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLScThzeOla4FG2tEGfUVthAb8ZyTIzSGb0nB_tcqSlYSbrIjZA/viewform?usp=sf_link"
          button
          rel="noopener noreferrer"
          target="_blank"
        >
          Join The Tribe
        </ExternalLink>
      </Centered>
    </ConstrainedWidth>
  </Layout>
)

export default NotFoundPage
