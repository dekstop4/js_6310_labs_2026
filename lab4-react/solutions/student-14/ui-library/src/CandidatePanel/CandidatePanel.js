import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"

import styles from './CandidatePanel.module.css'

export const CandidatePanel = ({ mode, onModeChange, onNumberSelect, onErase, }) => {
  return (_jsxs("div", { className: styles.panel, children: [_jsxs("div", { className: styles.modeToggle, children: [_jsx("button", { className: `${styles.modeBtn} ${mode === 'value' ? styles.active : ''}`, onClick: () => onModeChange('value'), children: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435" }), _jsx("button", { className: `${styles.modeBtn} ${mode === 'note' ? styles.active : ''}`, onClick: () => onModeChange('note'), children: "\u0417\u0430\u043C\u0435\u0442\u043A\u0430" })] }), _jsx("div", { className: styles.numpad, children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (_jsx("button", { className: styles.numBtn, onClick: () => onNumberSelect(num), children: num }, num))) }), _jsx("button", { className: styles.eraseBtn, onClick: onErase, children: "\u0421\u0442\u0435\u0440\u0435\u0442\u044C" })] }))
}
