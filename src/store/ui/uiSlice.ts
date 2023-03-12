import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feedback, UiState } from "../../types/uiTypes";

const uiInitialState: UiState = {
  isLoadingVisible: false,
  feedback: {
    message: "",
    isSuccessful: true,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoader: (previousUi: UiState) => ({
      ...previousUi,
      isLoadingVisible: true,
    }),

    closeLoader: (previousUi: UiState) => ({
      ...previousUi,
      isLoadingVisible: false,
    }),

    showFeedback: (previousUi: UiState, action: PayloadAction<Feedback>) => ({
      ...previousUi,
      feedback: action.payload,
    }),

    hideFeedback: (previousUi: UiState, action: PayloadAction<Feedback>) => ({
      ...previousUi,
      feedback: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderactionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
