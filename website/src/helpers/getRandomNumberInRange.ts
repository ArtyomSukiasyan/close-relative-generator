export default function getRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * max) + min;
}
