export const capitalizeSting = (string: string) =>
  string === "" || string === undefined || string === null
    ? ""
    : string[0].toUpperCase() + string.slice(1);
