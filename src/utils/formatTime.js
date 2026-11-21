// count(초)를 "분:초" 형식으로 변환 (예: 75 -> "01:15")
export function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}
