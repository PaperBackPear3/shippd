export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  if (baseUrl === "/") return path;

  const trimmedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  return path === "/" ? `${trimmedBase}/` : `${trimmedBase}${path}`;
}

export function stripBasePath(pathname: string): string {
  const baseUrl = import.meta.env.BASE_URL || "/";
  if (baseUrl === "/") return pathname;

  const trimmedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  if (pathname === trimmedBase) return "/";
  if (pathname.startsWith(`${trimmedBase}/`)) {
    return pathname.slice(trimmedBase.length) || "/";
  }

  return pathname;
}
