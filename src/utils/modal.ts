import { Alert, Confirm, Loading, Submit } from "../components/modal";

export enum ModalType {
  LOADING = 1,
  ALERT = 2,
  CONFIRM = 3,
  SUBMIT = 4,
}

export const modalList: any = {
  [ModalType.LOADING]: Loading,
  [ModalType.ALERT]: Alert,
  [ModalType.CONFIRM]: Confirm,
  [ModalType.SUBMIT]: Submit,
};
