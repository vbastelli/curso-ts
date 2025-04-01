// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  // CTRL + SPACE
  firstName: "Joana",
  age: 20,
  email: "j@gmail.com",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "A";
  },
};

const printLog = (message: string) => {};

printLog(user.password!);

// Unions

type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "auth@g.com",
  firstName: "Fernando",
  orders: [],
  register() {
    return "B";
  },
};

// Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "@.com",
  firstName: "Felipe",
  login() {
    return "C";
  },
};

// emailUser.firstName = "12";

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "a@g.com",
  books: ["1"],
  firstName: "Edu",
  login() {
    return "D";
  },
};

type Grade = number | string;
const grade = 1;
