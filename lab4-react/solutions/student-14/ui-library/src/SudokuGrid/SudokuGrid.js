import { jsx as _jsx } from "react/jsx-runtime"

import styles from './SudokuGrid.module.css'

export const SudokuGrid = ({ grid, onCellClick, selectedCell, }) => {
  return (_jsx("div", { className: styles.grid, children: grid.map((row, rowIndex) => (_jsx("div", { className: styles.row, children: row.map((cell, colIndex) => {
    const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex
    const isRightBorder = (colIndex + 1) % 3 === 0 && colIndex !== 8
    const isBottomBorder = (rowIndex + 1) % 3 === 0 && rowIndex !== 8

    return (_jsx("div", { className: [
      styles.cell,
      cell.isInitial ? styles.initial : '',
      isSelected ? styles.selected : '',
      isRightBorder ? styles.rightBorder : '',
      isBottomBorder ? styles.bottomBorder : '',
    ].join(' '), onClick: () => onCellClick?.(rowIndex, colIndex), children: cell.value ? (_jsx("span", { className: styles.value, children: cell.value })) : (_jsx("div", { className: styles.notes, children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (_jsx("span", { className: styles.note, children: cell.notes.includes(num) ? num : '' }, num))) })) }, `${rowIndex}-${colIndex}`))
  }) }, rowIndex))) }))
}
