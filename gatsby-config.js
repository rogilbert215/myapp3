module.exports = {
  siteMetadata: {
    title: 'Dinote',
    description: 'Crowdfunding platform for digital term notes.',
    keywords: 'crowdfunding, term notes, digital notes, tokenization,  crypto, crypto currency, blockchain, '
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'qyk800exqaet',
        accessToken: 'd92f80a1bd29a9a659eedfab58b3f6adf88e97ca0a067be79bf5e0e1516576c5'
      }
    }
  ],
}