import React from 'react'

export type CellValue = number | null;
export type Notes = number[];
export interface CellData {
    value: CellValue;
    notes: Notes;
    isInitial?: boolean;
}
export interface SudokuGridProps {
    grid: CellData[][];
    onCellClick?: (row: number, col: number) => void;
    selectedCell?: {
        row: number;
        col: number;
    } | null;
}
export declare const SudokuGrid: React.FC<SudokuGridProps>
//# sourceMappingURL=SudokuGrid.d.ts.map