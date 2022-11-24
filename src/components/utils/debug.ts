export default function isDebug() {
  return process.env.NEXT_PUBLIC_DEBUG === 'true';
}
