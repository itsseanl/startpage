const sanityClient = require('@sanity/client');

/**
 * @remark Sanity Client (always private)
 *
 * A future version of sanity will allow for two datasets in the same studio
 * at that point, we will have two client exports so that one can use the CDN
 *
 * The secure client will be used for form submissions and the like
 */
export const sanity = sanityClient({
  projectId: '1q31l0om',
  dataset: 'production',
  token:
    '',
  useCdn: false
});