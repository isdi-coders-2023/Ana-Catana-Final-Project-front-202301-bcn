export interface Feedback {
  message: string;
  isSuccessful: boolean;
}

export interface UiState {
  isLoadingVisible: boolean;
  feedback: Feedback;
}
