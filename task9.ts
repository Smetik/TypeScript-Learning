type ApiUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  isDeleted: boolean;
};

type UserForUpdate = Pick<ApiUser, "id"> & Partial<Omit<ApiUser,"id">>;
type PublicUser = Pick<ApiUser, "id" | "name">;
type UserWithoutDates = Omit <ApiUser, "createdAt">;
type UserMap = Record <ApiUser["id"], PublicUser>;

declare function getUser ():Promise<ApiUser>
type PromiseUser = ReturnType<typeof getUser>;