export function shortenAddress(address) {
  if (!address) return "Loading";
  const first = address.substring(0, 4);
  const last = address.substring(address.length - 6);
  return first + "..." + last;
}
