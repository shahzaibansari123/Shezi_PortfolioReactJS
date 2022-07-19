import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client= sanityClient({
    projectId: Process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
})
