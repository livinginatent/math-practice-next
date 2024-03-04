export interface RegisterData {
  username: string;
  email: string;
  password: string;
  userRank: number;
  userStats: {
    totalGamesPlayed: number;
    totalScore: number;
    totalAdditionPlayed: number;
    totalAdditionScore: number;
    highestAdditionScore: number;
    totalSubtractionPlayed: number;
    totalSubtractionScore: number;
    highestSubtractionScore: number;
    totalMultiplicationPlayed: number;
    totalMultiplicationScore: number;
    highestMultiplicationScore: number;
    totalDivisionPlayed: number;
    totalDivisionScore: number;
    highestDivisionScore: number;
    totalOrderedPlayed: number;
    totalOrderedScore: number;
    highestOrderedScore: number;
  };
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
  challengeType: string 
}

export interface GameOverComponent {
  lostBy:string
  newGame:any
  finalScore:number
}

export interface UpdateData {
  finalScore: number;
  operation: string 
  token: string;
}


export interface UserModel {
  username: string;
  email: string;
  password: string;
  createdAt: string;
  userRank: number;
  userStats: {
    totalGamesPlayed: number;
    totalScore: number;
    totalAdditionPlayed: number;
    totalAdditionScore: number;
    highestAdditionScore: number;
    totalSubtractionPlayed: number;
    totalSubtractionScore: number;
    highestSubtractionScore: number;
    totalMultiplicationPlayed: number;
    totalMultiplicationScore: number;
    highestMultiplicationScore: number;
    totalDivisionPlayed: number;
    totalDivisionScore: number;
    highestDivisionScore: number;
    totalOrderedPlayed: number;
    totalOrderedScore: number;
    highestOrderedScore: number;
  };
}

export interface gameModes {
  title:string
}

export interface ProfileHeader {
  path:string
}