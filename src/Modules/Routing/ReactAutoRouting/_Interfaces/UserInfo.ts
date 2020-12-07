export interface UserInfo {
  id: number;
  role: number;
  // This property helps to extend the interface for
  // AdditionalAuthRules if necessary.
  [key: string]: any;
}
