export const commandKey: string = window.navigator.platform.search(/mac/i) >= 0 ? 'Cmd' : 'Ctrl';

export function getPasteShortcut(): string {
  return `${commandKey} + V`;
}
