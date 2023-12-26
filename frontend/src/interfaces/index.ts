export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export interface FormInput {
  username: string;
  email: string;
  password: string;
}

export interface ChallengeComponent {
  challengeType: string | string[] | undefined;
}

export interface GameOverComponent {
  lostBy:string
  newGame:any
}