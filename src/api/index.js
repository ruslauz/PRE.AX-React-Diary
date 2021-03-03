export const getData = async () => {
  const URL = 'http://localhost:3004/records/';
  const response = await fetch(URL);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
} 

export const postData = async (body) => {
  const URL = 'http://localhost:3004/records/';
  const response = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
  throw new Error(response.status);
} 

