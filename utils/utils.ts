export const formatReadableEvent = (e: KeyboardEvent | null): string => {
  if (e === null) {
    return JSON.stringify({});
  }

  return JSON.stringify({KeyboardEvent: {
    altKey: e.altKey,
    bubbles: e.bubbles,
    cancelBubble: e.cancelBubble,
    cancelable: e.cancelable,
    charCode: e.charCode,
    code: e.code,
    composed: e.composed,
    ctrlKey: e.ctrlKey,
    currentTarget: e.currentTarget,
    defaultPrevented: e.defaultPrevented,
    detail: e.detail,
    eventPhase: e.eventPhase,
    isComposing: e.isComposing,
    isTrusted: e.isTrusted,
    key: e.key,
    keyCode: e.keyCode,
    location: e.location,
    metaKey: e.metaKey,
    repeat: e.repeat,
    returnValue: e.returnValue,
    shiftKey: e.shiftKey,
    srcElement: e.srcElement,
    target: e.target,
    timeStamp: e.timeStamp,
    type: e.type,
    which: e.which,
    }}, null, 4);
};

// Used source from: http://jsfiddle.net/KJQ9K/554/
export const highlightJsonSyntax = (json: string): any => {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'jsonStringKey';
      } else {
        cls = 'jsonStringValue';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
};
