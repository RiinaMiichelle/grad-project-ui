// Returns an object with the current cookies.
// { loggedIn: true, idk: false }
export const getCookies = () => {
  const cookies = document.cookie.split("; "); // "loggedIn=true; idk=false" => ["loggedIn=true", "idk=false"]

  const cookieMap = {};
  cookies.forEach((cookie) => {
    const cookieParts = cookie.split("="); // ["idk", "false"]
    cookieMap[cookieParts[0]] = cookieParts[1];
  });

  return cookieMap;
}
