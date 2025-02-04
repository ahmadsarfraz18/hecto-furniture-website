import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e1rs1d04',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:process.env.SANITY_API_TOKEN || 'sk7I4O4soP4isl1IfDiPWcz2ra8VcOobe5WnmSgiQIkmCZ3Tu2y05KDYnrin3cBccIGkbz55wWJk0QYFbX4bmefQ33ykuiNw7I533e1GMPf4GMzLlOVHgEPHlU3u87YS7Hz6k2Gn3U05jFXhPqcdR8STZkYq57HlA35OPrjlag6oTluBwy1r',

})
