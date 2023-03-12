import { Feedback, UiState } from "../../types/uiTypes";
import {
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
  uiReducer,
} from "./uiSlice";

const previousUiPayload: UiState = {
  isLoadingVisible: false,
  feedback: {
    message: "",
    isSuccessful: true,
  },
};

const initialUi: UiState = {
  isLoadingVisible: false,
  feedback: {
    message: "",
    isSuccessful: true,
  },
};

describe("Given a 'swowLoader' reducer", () => {
  describe("When it receives a previous state with 'isLoadingVisible' property set on true", () => {
    test("Then it should return 'isLoadingVisible' set on true", () => {
      const uiPayload = {
        type: "ui/showLoader",
      };

      const expectedUiState = {
        isLoadingVisible: true,
        feedback: {
          message: "",
          isSuccessful: true,
        },
      };

      const newUiState = uiReducer(previousUiPayload, uiPayload);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a 'closeLoader' reducer", () => {
  describe("When it receives a previous state with 'isLoadingVisible' property set on true", () => {
    test("Then it should return 'isloadingVisible' set on false", () => {
      const uiPayload = {
        type: "ui/closeLoader",
      };

      const expectedUiState = {
        isLoadingVisible: false,
        feedback: {
          message: "",
          isSuccessful: true,
        },
      };

      const newUiState = uiReducer(previousUiPayload, uiPayload);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a 'showFeedback' reducer", () => {
  describe("When it is called with the feedback text 'Invalid credentials. Please try again.'", () => {
    test("Then it should show a feedback text 'Invalid credentials. Please try again.'", () => {
      const feedbackText: Feedback = {
        message: "Invalid credentials. Please try again.",
        isSuccessful: false,
      };

      const expectedUiState: UiState = {
        isLoadingVisible: false,
        feedback: feedbackText,
      };

      const previousUiAction = showFeedbackActionCreator(feedbackText);
      const newFeedbackText = uiReducer(initialUi, previousUiAction);

      expect(newFeedbackText).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a 'hideFeedback' reducer", () => {
  describe("When it is called with the feedback text 'Invalid credentials. Please try again.'", () => {
    test("Then it should't show a feedback text 'Invalid credentials. Please try again.'", () => {
      const feedbackText: Feedback = {
        message: "",
        isSuccessful: false,
      };

      const expectedUiState: UiState = {
        isLoadingVisible: false,
        feedback: {
          message: "",
          isSuccessful: false,
        },
      };

      const previousUiAction = hideFeedbackActionCreator(feedbackText);
      const newFeedbackText = uiReducer(initialUi, previousUiAction);

      expect(expectedUiState).toStrictEqual(newFeedbackText);
    });
  });
});
