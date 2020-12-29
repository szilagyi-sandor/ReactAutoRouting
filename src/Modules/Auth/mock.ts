import { defaultUser } from "./_Constants/defaultUser";
import { roles } from "./_Constants/roles";
import { User } from "./_Interfaces/User";

export const mockedUsers = [
  {
    id: 1,
    name: "User Ursula",
    role: roles.user.id,
    username: "userUrsula",
    password: "userUrsula",
  },
  {
    id: 2,
    name: "Admin Abbigael",
    role: roles.admin.id,
    username: "adminAbbigael",
    password: "adminAbbigael",
  },
  {
    id: 3,
    name: "SuperAdmin Sandor",
    role: roles.superAdmin.id,
    username: "superAdminSandor",
    password: "superAdminSandor",
  },
];

const userStorageName = "mockedUser";

export const initMockedUser = (): User => {
  const user = localStorage.getItem(userStorageName);

  if (user) {
    return JSON.parse(user);
  }

  return defaultUser;
};

export const findMockedUser = (username: string, password: string) => {
  const user:
    | (User & { username?: string; password?: string })
    | undefined = mockedUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return user;
  }

  // We are not returning username/password. It does not really matter, but
  // this way it felt better.
  const output = { ...user };
  delete output.username;
  delete output.password;

  return output;
};

export const setUserToLocalStorage = (user: User) => {
  localStorage.setItem(userStorageName, JSON.stringify(user));
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem(userStorageName);
};
