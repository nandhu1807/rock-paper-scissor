import { GetAllValuesFromStorage } from '../utils/types';

export function getFromLocalStorage(key: string): number {
  const score: string | null = localStorage.getItem(key);
  if (score !== null) {
    return parseInt(score);
  } else {
    return 0;
  }
}

export function getAllFromLocalStorage(): GetAllValuesFromStorage {
  const valueFromStorageMap: GetAllValuesFromStorage = {
    score1: 0,
    score2: 0,
  };
  const score1: string | null = localStorage.getItem('score1');
  const score2: string | null = localStorage.getItem('score2');
  if (score1 !== null) {
    valueFromStorageMap.score1 = parseInt(score1);
  }
  if (score2 !== null) {
    valueFromStorageMap.score2 = parseInt(score2);
  }
  return valueFromStorageMap;
}

export function saveInLocalStorage(payload: { key: string; value: string }): void {
  Object.entries(payload).map(([key, value]) => {
    localStorage.setItem(key, value);
  });
}

export function removeAllValuesFromLocalStorage(): void {
  localStorage.removeItem('score1');
  localStorage.removeItem('score2');
}
