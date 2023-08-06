export type Children = { children: React.ReactNode };
export type NewsLetter = "daily" | "weekly" | "monthly" | "";
export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export interface User {
  name: string;
  age: string;
  email: string;
  newsletter: NewsLetter;
}

export interface RegisterStepProps {
  handleChangeRegister: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  user: User | undefined;
  handleSelect?: (event: SelectChangeEvent) => void;
  setSearchParams: SetURLSearchParams;
}

export interface userResponse {
  user: User;
  token: string;
}

export interface RegContextType {
  userContext: userResponse | undefined;
  setUserContext: React.Dispatch<
    React.SetStateAction<userResponse | undefined>
  >;
}
