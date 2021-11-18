export function intervalToString(inter: number): string {
  let result: string;
  var hours: number | string = Math.floor(inter / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  var minutes: number | string = Math.floor(inter / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var seconds: number | string = inter;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (seconds > 59) {
    inter = 0;
  }
  result = `${hours}:${minutes}:${seconds}`;
  return result;
}
