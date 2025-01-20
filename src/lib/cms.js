import { executeQuery } from '@datocms/cda-client';

export async function queryCMS(query, variables = {}) {
  const token = import.meta.env.DATOCMS_API_TOKEN;

  if (!token) {
    throw new Error('DATOCMS_API_TOKEN is not set in environment variables');
  }

  try {
    // Pass the query, variables, and token to executeQuery
    const result = await executeQuery(query, {
      token,
      variables
    });

    return result;
  } catch (error) {
    console.error('Error querying DatoCMS:', error);
    throw new Error('Failed to fetch data from DatoCMS');
  }
}
