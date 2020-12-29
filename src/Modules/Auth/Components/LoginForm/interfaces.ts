import { User } from "Modules/Auth/_Interfaces/User";

export interface LoginFormProps {
  onSubmit: (User: User) => void;
}
