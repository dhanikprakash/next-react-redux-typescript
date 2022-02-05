export async function handleResponse(response: any) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  console.log('Network response was not ok.');
  throw new Error('Network response was not ok.');
}

// In a real app, call an error logging service.
export function handleError(error: any) {
  console.log('API call failed. ' + error);
  throw error;
}
