import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Moves an element up in the array.
 * @param arr - The array of strings.
 * @param index - The index of the element to move up.
 * @returns A new array with the element moved up.
 */
export function moveElementUp(arr: string[], index: number): string[] {
  if (index <= 0 || index >= arr.length) {
    return arr; // No change if index is out of bounds or already at the top
  }
  const newArr = [...arr];
  [newArr[index - 1], newArr[index]] = [newArr[index], newArr[index - 1]];
  return newArr;
}

/**
 * Moves an element down in the array.
 * @param arr - The array of strings.
 * @param index - The index of the element to move down.
 * @returns A new array with the element moved down.
 */
export function moveElementDown(arr: string[], index: number): string[] {
  if (index < 0 || index >= arr.length - 1) {
    return arr; // No change if index is out of bounds or already at the bottom
  }
  const newArr = [...arr];
  [newArr[index + 1], newArr[index]] = [newArr[index], newArr[index + 1]];
  return newArr;
}
