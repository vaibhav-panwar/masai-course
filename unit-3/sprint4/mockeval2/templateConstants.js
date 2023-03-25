// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
export const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
