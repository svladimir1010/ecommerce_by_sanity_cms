import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

export const client = sanityClient ({
  projectId: 'ev0ub5mt',
  dataset: 'production',
  apiVersion: '2023-03-14',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)