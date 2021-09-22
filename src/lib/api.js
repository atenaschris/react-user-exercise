const FIREBASE_DOMAIN = "https://user-app-be726-default-rtdb.firebaseio.com/";

export async function getAllUsers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch users.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const userObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(userObj);
  }

  return transformedUsers;
}


export async function getSingleUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function updateUser(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/quotes/${requestData.userId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(requestData.userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went worng!");
  }

  return null;
}

export async function deleteUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${userId}.json`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  console.log(data);

  return null;
}
