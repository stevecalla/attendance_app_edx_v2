export const saveFileContentRoute = (token, fileContent, route) => {
  return fetch(`/api/${route}`, {
    method: 'POST',
    headers: {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${token}`,
    },
    body: fileContent,
  });
};
