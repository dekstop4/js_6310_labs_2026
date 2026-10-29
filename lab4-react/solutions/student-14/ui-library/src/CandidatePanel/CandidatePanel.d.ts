import React from 'react'

export type InputMode = 'value' | 'note';
export interface CandidatePanelProps {
    mode: InputMode;
    onModeChange: (mode: InputMode) => void;
    onNumberSelect: (num: number) => void;
    onErase: () => void;
}
export declare const CandidatePanel: React.FC<CandidatePanelProps>
//# sourceMappingURL=CandidatePanel.d.ts.map