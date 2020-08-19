import { DialogProgrammatic as Dialog } from "buefy";
import { DEFAULT_DIALOG_CONFIG } from "./dialog-config";

const RADIX = 10;

export default function (userInput) {
  if (_isInvalidInput(userInput)) {
    return null;
  }

  let result = 0;
  let base = 1;

  for (let i = userInput.length - 1; i >= 0; i--) {
    result += parseInt(userInput[i], RADIX) * base;
    base *= 2;
  }

  return result;
}

function _isInvalidInput(input) {
  if (input.length === 0) {
    Dialog.alert({
      message: "Input cannot be empty",
      ...DEFAULT_DIALOG_CONFIG
    });
    return true;
  }
  if (input.length > 8) {
    Dialog.alert({
      message:
        "Input length must not longer than <strong>8</strong> characters",
      ...DEFAULT_DIALOG_CONFIG
    });
    return true;
  }

  let pattern = /[2-9a-zA-Z]+/g;
  if (input.search(pattern) > -1) {
    Dialog.alert({
      message:
        "Input must contain only <strong>0</strong> and <strong>1</strong>",
      ...DEFAULT_DIALOG_CONFIG
    });

    return true;
  }

  return false;
}
