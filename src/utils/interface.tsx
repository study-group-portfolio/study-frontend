import React from "react";
import { SelectEventType, TabMenuType } from "utils/enum";

export interface IAuthLayout {
  children: React.ReactNode;
}
export interface PositionState {
  name: string; // 역할 이름
  currentNum: number; // 현재 인원
  totalNum: number; // 총 인원
}

export interface CustomChangeEvent {
  value?: any | any[];
  selectEventType: SelectEventType;
}

export interface ModalProps {
  onClose: () => void;
}

export interface StudyInfo {
  title: string;
  position: string;
}

export interface ProfileInfo {
  name: string;
  profileImg?: string;
  position: string;
}

export interface Position {
  positionName: string;
  count: number;
  totalCount: number;
  skills: string[];
  recruited: boolean
}

export interface Duration {
  startDate?: String | null;
  endDate?: String | null;
}

export interface Tab {
  name: string;
  value: TabMenuType;
}

// 로그인, 회원가입 전용
export interface IUser {
  email: string;
  password: string;
}

// 회원가입 전용
export interface IUserSignup {
  email: string;
  password: string;
  nickname: string;
  confirmPassword: string;
}

export interface GroupOption<T> {
  title?: string;
  items?: T[];
}