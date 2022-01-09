import { SelectEventType } from 'utils/enum';
export interface PositionState {
    name: string; // 역할 이름
    currentNum: number; // 현재 인원
    totalNum: number; // 총 인원
}

export interface CustomChangeEvent {
    value?: string | string[];
    selectEventType: SelectEventType
}

export interface ModalProps {
    onClose: () => (void);
}