/**
 * Representa una peça o un conjunt del joc de memòria.
 * S'ha canviat el nom a MemoryInfo (PascalCase) que és la convenció per a interfícies.
 */
export interface MemoryInfo {
  /**
   * L'identificador únic. Pot ser un número o una cadena de text.
   */
  id: string | number;

  /**
   * Una col·lecció de rutes a les imatges.
   * Nota: La col·lecció hauria de contenir menys de 40 imatges.
   */
  imagePaths: string[];
}
