export const getData = async (url, headers) => {
  const response = await fetch(url, {
    headers: headers
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
} 

export const postData = async (url, body) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error(response.status);
} 

