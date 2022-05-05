export type user = {
  userId: string;
  email: string;
  age?: number;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type allUsers={
  users:user[]
}
