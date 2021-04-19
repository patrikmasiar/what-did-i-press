type KeyCodeListItem = {
  keyName: string | number;
  keyCode: number;
  eventKey: string | number;
  eventCode: string;
  notes: string;
}

const getKeyCodesList = (): KeyCodeListItem[] => {
  return [
    {
      keyName: "backspace",
      keyCode: 8,
      eventKey: "Backspace",
      eventCode: "Backspace",
      notes: ""
    },
    {
      keyName: "tab",
      keyCode: 9,
      eventKey: "Tab",
      eventCode: "Tab",
      notes: ""
    },
    {
      keyName: "enter",
      keyCode: 13,
      eventKey: "Enter",
      eventCode: "Enter",
      notes: ""
    },
    {
      keyName: "shift(left)",
      keyCode: 16,
      eventKey: "Shift",
      eventCode: "ShiftLeft",
      notes: "`event.shiftKey` is true"
    },
    {
      keyName: "shift(right)",
      keyCode: 16,
      eventKey: "Shift",
      eventCode: "ShiftRight",
      notes: "`event.shiftKey` is true"
    },
    {
      keyName: "ctrl(left)",
      keyCode: 17,
      eventKey: "Control",
      eventCode: "ControlLeft",
      notes: "`event.ctrlKey` is true"
    },
    {
      keyName: "ctrl(right)",
      keyCode: 17,
      eventKey: "Control",
      eventCode: "ControlRight",
      notes: "`event.ctrlKey` is true"
    },
    {
      keyName: "alt(left)",
      keyCode: 18,
      eventKey: "Alt",
      eventCode: "AltLeft",
      notes: "`event.altKey` is true"
    },
    {
      keyName: "alt(right)",
      keyCode: 18,
      eventKey: "Alt",
      eventCode: "AltRight",
      notes: "`event.altKey` is true"
    },
    {
      keyName: "pause/break",
      keyCode: 19,
      eventKey: "Pause",
      eventCode: "Pause",
      notes: ""
    },
    {
      keyName: "caps lock",
      keyCode: 20,
      eventKey: "CapsLock",
      eventCode: "CapsLock",
      notes: ""
    },
    {
      keyName: "escape",
      keyCode: 27,
      eventKey: "Escape",
      eventCode: "Escape",
      notes: ""
    },
    {
      keyName: "space",
      keyCode: 32,
      eventKey: "",
      eventCode: "Space",
      notes: "The `event.key` value is a single space."
    },
    {
      keyName: "page up",
      keyCode: 33,
      eventKey: "PageUp",
      eventCode: "PageUp",
      notes: ""
    },
    {
      keyName: "page down",
      keyCode: 34,
      eventKey: "PageDown",
      eventCode: "PageDown",
      notes: ""
    },
    {
      keyName: "end",
      keyCode: 35,
      eventKey: "End",
      eventCode: "End",
      notes: ""
    },
    {
      keyName: "home",
      keyCode: 36,
      eventKey: "Home",
      eventCode: "Home",
      notes: ""
    },
    {
      keyName: "left arrow",
      keyCode: 37,
      eventKey: "ArrowLeft",
      eventCode: "ArrowLeft",
      notes: ""
    },
    {
      keyName: "up arrow",
      keyCode: 38,
      eventKey: "ArrowUp",
      eventCode: "ArrowUp",
      notes: ""
    },
    {
      keyName: "right arrow",
      keyCode: 39,
      eventKey: "ArrowRight",
      eventCode: "ArrowRight",
      notes: ""
    },
    {
      keyName: "down arrow",
      keyCode: 40,
      eventKey: "ArrowDown",
      eventCode: "ArrowDown",
      notes: ""
    },
    {
      keyName: "print screen",
      keyCode: 44,
      eventKey: "PrintScreen",
      eventCode: "PrintScreen",
      notes: ""
    },
    {
      keyName: "insert",
      keyCode: 45,
      eventKey: "Insert",
      eventCode: "Insert",
      notes: ""
    },
    {
      keyName: "delete",
      keyCode: 46,
      eventKey: "Delete",
      eventCode: "Delete",
      notes: ""
    },
    {
      keyName: 0,
      keyCode: 48,
      eventKey: 0,
      eventCode: "Digit0",
      notes: ""
    },
    {
      keyName: 1,
      keyCode: 49,
      eventKey: 1,
      eventCode: "Digit1",
      notes: ""
    },
    {
      keyName: 2,
      keyCode: 50,
      eventKey: 2,
      eventCode: "Digit2",
      notes: ""
    },
    {
      keyName: 3,
      keyCode: 51,
      eventKey: 3,
      eventCode: "Digit3",
      notes: ""
    },
    {
      keyName: 4,
      keyCode: 52,
      eventKey: 4,
      eventCode: "Digit4",
      notes: ""
    },
    {
      keyName: 5,
      keyCode: 53,
      eventKey: 5,
      eventCode: "Digit5",
      notes: ""
    },
    {
      keyName: 6,
      keyCode: 54,
      eventKey: 6,
      eventCode: "Digit6",
      notes: ""
    },
    {
      keyName: 7,
      keyCode: 55,
      eventKey: 7,
      eventCode: "Digit7",
      notes: ""
    },
    {
      keyName: 8,
      keyCode: 56,
      eventKey: 8,
      eventCode: "Digit8",
      notes: ""
    },
    {
      keyName: 9,
      keyCode: 57,
      eventKey: 9,
      eventCode: "Digit9",
      notes: ""
    },
    {
      keyName: "a",
      keyCode: 65,
      eventKey: "a",
      eventCode: "KeyA",
      notes: ""
    },
    {
      keyName: "b",
      keyCode: 66,
      eventKey: "b",
      eventCode: "KeyB",
      notes: ""
    },
    {
      keyName: "c",
      keyCode: 67,
      eventKey: "c",
      eventCode: "KeyC",
      notes: ""
    },
    {
      keyName: "d",
      keyCode: 68,
      eventKey: "d",
      eventCode: "KeyD",
      notes: ""
    },
    {
      keyName: "e",
      keyCode: 69,
      eventKey: "e",
      eventCode: "KeyE",
      notes: ""
    },
    {
      keyName: "f",
      keyCode: 70,
      eventKey: "f",
      eventCode: "KeyF",
      notes: ""
    },
    {
      keyName: "g",
      keyCode: 71,
      eventKey: "g",
      eventCode: "KeyG",
      notes: ""
    },
    {
      keyName: "h",
      keyCode: 72,
      eventKey: "h",
      eventCode: "KeyH",
      notes: ""
    },
    {
      keyName: "i",
      keyCode: 73,
      eventKey: "i",
      eventCode: "KeyI",
      notes: ""
    },
    {
      keyName: "j",
      keyCode: 74,
      eventKey: "j",
      eventCode: "KeyJ",
      notes: ""
    },
    {
      keyName: "k",
      keyCode: 75,
      eventKey: "k",
      eventCode: "KeyK",
      notes: ""
    },
    {
      keyName: "l",
      keyCode: 76,
      eventKey: "l",
      eventCode: "KeyL",
      notes: ""
    },
    {
      keyName: "m",
      keyCode: 77,
      eventKey: "m",
      eventCode: "KeyM",
      notes: ""
    },
    {
      keyName: "n",
      keyCode: 78,
      eventKey: "n",
      eventCode: "KeyN",
      notes: ""
    },
    {
      keyName: "o",
      keyCode: 79,
      eventKey: "o",
      eventCode: "KeyO",
      notes: ""
    },
    {
      keyName: "p",
      keyCode: 80,
      eventKey: "p",
      eventCode: "KeyP",
      notes: ""
    },
    {
      keyName: "q",
      keyCode: 81,
      eventKey: "q",
      eventCode: "KeyQ",
      notes: ""
    },
    {
      keyName: "r",
      keyCode: 82,
      eventKey: "r",
      eventCode: "KeyR",
      notes: ""
    },
    {
      keyName: "s",
      keyCode: 83,
      eventKey: "s",
      eventCode: "KeyS",
      notes: ""
    },
    {
      keyName: "t",
      keyCode: 84,
      eventKey: "t",
      eventCode: "KeyT",
      notes: ""
    },
    {
      keyName: "u",
      keyCode: 85,
      eventKey: "u",
      eventCode: "KeyU",
      notes: ""
    },
    {
      keyName: "v",
      keyCode: 86,
      eventKey: "v",
      eventCode: "KeyV",
      notes: ""
    },
    {
      keyName: "w",
      keyCode: 87,
      eventKey: "w",
      eventCode: "KeyW",
      notes: ""
    },
    {
      keyName: "x",
      keyCode: 88,
      eventKey: "x",
      eventCode: "KeyX",
      notes: ""
    },
    {
      keyName: "y",
      keyCode: 89,
      eventKey: "y",
      eventCode: "KeyY",
      notes: ""
    },
    {
      keyName: "z",
      keyCode: 90,
      eventKey: "z",
      eventCode: "KeyZ",
      notes: ""
    },
    {
      keyName: "left window key",
      keyCode: 91,
      eventKey: "Meta",
      eventCode: "MetaLeft",
      notes: "`event.metaKey` is true"
    },
    {
      keyName: "right window key",
      keyCode: 92,
      eventKey: "Meta",
      eventCode: "MetaRight",
      notes: "`event.metaKey` is true"
    },
    {
      keyName: "select key (Context Menu)",
      keyCode: 93,
      eventKey: "ContextMenu",
      eventCode: "ContextMenu",
      notes: ""
    },
    {
      keyName: "numpad 0",
      keyCode: 96,
      eventKey: 0,
      eventCode: "Numpad0",
      notes: ""
    },
    {
      keyName: "numpad 1",
      keyCode: 97,
      eventKey: 1,
      eventCode: "Numpad1",
      notes: ""
    },
    {
      keyName: "numpad 2",
      keyCode: 98,
      eventKey: 2,
      eventCode: "Numpad2",
      notes: ""
    },
    {
      keyName: "numpad 3",
      keyCode: 99,
      eventKey: 3,
      eventCode: "Numpad3",
      notes: ""
    },
    {
      keyName: "numpad 4",
      keyCode: 100,
      eventKey: 4,
      eventCode: "Numpad4",
      notes: ""
    },
    {
      keyName: "numpad 5",
      keyCode: 101,
      eventKey: 5,
      eventCode: "Numpad5",
      notes: ""
    },
    {
      keyName: "numpad 6",
      keyCode: 102,
      eventKey: 6,
      eventCode: "Numpad6",
      notes: ""
    },
    {
      keyName: "numpad 7",
      keyCode: 103,
      eventKey: 7,
      eventCode: "Numpad7",
      notes: ""
    },
    {
      keyName: "numpad 8",
      keyCode: 104,
      eventKey: 8,
      eventCode: "Numpad8",
      notes: ""
    },
    {
      keyName: "numpad 9",
      keyCode: 105,
      eventKey: 9,
      eventCode: "Numpad9",
      notes: ""
    },
    {
      keyName: "multiply",
      keyCode: 106,
      eventKey: "*",
      eventCode: "NumpadMultiply",
      notes: ""
    },
    {
      keyName: "add",
      keyCode: 107,
      eventKey: "+",
      eventCode: "NumpadAdd",
      notes: ""
    },
    {
      keyName: "subtract",
      keyCode: 109,
      eventKey: "-",
      eventCode: "NumpadSubtract",
      notes: ""
    },
    {
      keyName: "decimal point",
      keyCode: 110,
      eventKey: ".",
      eventCode: "NumpadDecimal",
      notes: ""
    },
    {
      keyName: "divide",
      keyCode: 111,
      eventKey: "/",
      eventCode: "NumpadDivide",
      notes: ""
    },
    {
      keyName: "f1",
      keyCode: 112,
      eventKey: "F1",
      eventCode: "F1",
      notes: ""
    },
    {
      keyName: "f2",
      keyCode: 113,
      eventKey: "F2",
      eventCode: "F2",
      notes: ""
    },
    {
      keyName: "f3",
      keyCode: 114,
      eventKey: "F3",
      eventCode: "F3",
      notes: ""
    },
    {
      keyName: "f4",
      keyCode: 115,
      eventKey: "F4",
      eventCode: "F4",
      notes: ""
    },
    {
      keyName: "f5",
      keyCode: 116,
      eventKey: "F5",
      eventCode: "F5",
      notes: ""
    },
    {
      keyName: "f6",
      keyCode: 117,
      eventKey: "F6",
      eventCode: "F6",
      notes: ""
    },
    {
      keyName: "f7",
      keyCode: 118,
      eventKey: "F7",
      eventCode: "F7",
      notes: ""
    },
    {
      keyName: "f8",
      keyCode: 119,
      eventKey: "F8",
      eventCode: "F8",
      notes: ""
    },
    {
      keyName: "f9",
      keyCode: 120,
      eventKey: "F9",
      eventCode: "F9",
      notes: ""
    },
    {
      keyName: "f10",
      keyCode: 121,
      eventKey: "F10",
      eventCode: "F10",
      notes: ""
    },
    {
      keyName: "f11",
      keyCode: 122,
      eventKey: "F11",
      eventCode: "F11",
      notes: ""
    },
    {
      keyName: "f12",
      keyCode: 123,
      eventKey: "F12",
      eventCode: "F12",
      notes: ""
    },
    {
      keyName: "num lock",
      keyCode: 144,
      eventKey: "NumLock",
      eventCode: "NumLock",
      notes: ""
    },
    {
      keyName: "scroll lock",
      keyCode: 145,
      eventKey: "ScrollLock",
      eventCode: "ScrollLock",
      notes: ""
    },
    {
      keyName: "audio volume mute",
      keyCode: 173,
      eventKey: "AudioVolumeMute",
      eventCode: "",
      notes: "⚠️ The `event.which` value is 181 in Firefox. Also FF provides the code value as, `VolumeMute`"
    },
    {
      keyName: "audio volume down",
      keyCode: 174,
      eventKey: "AudioVolumeDown",
      eventCode: "",
      notes: "⚠️ The `event.which` value is 182 in Firefox. Also FF provides the code value as, `VolumeDown`"
    },
    {
      keyName: "audio volume up",
      keyCode: 175,
      eventKey: "AudioVolumeUp",
      eventCode: "",
      notes: "⚠️ The `event.which` value is 183 in Firefox. Also FF provides the code value as, `VolumeUp`"
    },
    {
      keyName: "media player",
      keyCode: 181,
      eventKey: "LaunchMediaPlayer",
      eventCode: "",
      notes: "⚠️ The ️`event.which` value is 0(no value) in Firefox. Also FF provides the code value as, `MediaSelect`"
    },
    {
      keyName: "launch application 1",
      keyCode: 182,
      eventKey: "LaunchApplication1",
      eventCode: "",
      notes: "⚠️ The ️`event.which` value is 0(no value) in Firefox. Also FF provides the code value as, `LaunchApp1`"
    },
    {
      keyName: "launch application 2",
      keyCode: 183,
      eventKey: "LaunchApplication2",
      eventCode: "",
      notes: "⚠️ The ️`event.which` value is 0(no value) in Firefox. Also FF provides the code value as, `LaunchApp2`"
    },
    {
      keyName: "semi-colon",
      keyCode: 186,
      eventKey: ";",
      eventCode: "Semicolon",
      notes: "⚠️ The `event.which` value is 59 in Firefox"
    },
    {
      keyName: "equal sign",
      keyCode: 187,
      eventKey: "=",
      eventCode: "Equal",
      notes: "⚠️ The `event.which` value is 61 in Firefox"
    },
    {
      keyName: "comma",
      keyCode: 188,
      eventKey: ",",
      eventCode: "Comma",
      notes: ""
    },
    {
      keyName: "dash",
      keyCode: 189,
      eventKey: "-",
      eventCode: "Minus",
      notes: "⚠️ The `event.which` value is 173 in Firefox"
    },
    {
      keyName: "period",
      keyCode: 190,
      eventKey: ".",
      eventCode: "Period",
      notes: ""
    },
    {
      keyName: "forward slash",
      keyCode: 191,
      eventKey: "/",
      eventCode: "Slash",
      notes: ""
    },
    {
      keyName: "Backquote/Grave accent",
      keyCode: 192,
      eventKey: "`",
      eventCode: "Backquote",
      notes: ""
    },
    {
      keyName: "open bracket",
      keyCode: 219,
      eventKey: "[",
      eventCode: "BracketLeft",
      notes: ""
    },
    {
      keyName: "back slash",
      keyCode: 220,
      eventKey: "\\",
      eventCode: "Backslash",
      notes: ""
    },
    {
      keyName: "close bracket",
      keyCode: 221,
      eventKey: "]",
      eventCode: "BracketRight",
      notes: ""
    },
    {
      keyName: "single quote",
      keyCode: 222,
      eventKey: "'",
      eventCode: "Quote",
      notes: ""
    }
  ];
};

export default getKeyCodesList();
