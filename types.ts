
export type CipherMode = 'encrypt' | 'decrypt';

export interface CipherResult {
  text: string;
  shift: number;
}
