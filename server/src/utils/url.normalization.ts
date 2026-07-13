export const normalizeUrl = (input: string) => {
  let url;
  try {
    url = new URL(input.trim());
  } catch {
    throw new Error("Invalid URL");
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http/https URLs allowed");
  }

  let normalized = url.toString();
  return normalized;
};
