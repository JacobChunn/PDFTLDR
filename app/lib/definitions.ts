export type User = {
	id: number,
	username: string,
	password: string,
	firstname: string,
	lastname: string,
};

export type UserState = {
    errors?: {
      [key: string]: string[] | undefined;
      id?: string[];
      username?: string[];
      password?: string[];
      firstname?: string[];
      lastname?: string[];
    } | undefined;
    message?: string | null;
};

export type UserInfo = {
	id: string,
};

export type UserFormData = {
	firstname: string | null,
	lastname: string | null,
	username: string | null,
	password: string | null,
}

export type StateType = {
	errors?: {
		[key: string]: string[] | undefined;
	  };
	message?: string | null;
};