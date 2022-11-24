export const toPixels = (remString: string, baseSize?: number): number => parseInt(remString.slice(0, -3), 10) * (baseSize || 16);
