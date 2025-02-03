const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    // console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    // console.log('Data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

/* The provided functionality is not what I need. I need to get ONE user RANDOMLY. Do they expect us to compine
   two given functions or what?*/
const searchGithubID = async () => {
  try {
    // const userID = Math.floor(Math.random() * 100000000) + 1;
    const userID = 950;
    console.log(`What is the id? ${userID}`);
    // console.log(import.meta.env);
    const response = await fetch(
      // `https://api.github.com/users?id=${randomID}`,
      // `https://api.github.com/users/id=${1}`,
      // `https://api.github.com/users/id/${1}`,
      // `https://api.github.com/users/${1}`,
      // The issue was the fetch was getting /users, rather than /user
      `https://api.github.com/user/${userID}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    // console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    // console.log('Data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

export { searchGithub, searchGithubUser, searchGithubID };
