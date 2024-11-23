import {create} from "zustand";

interface ToggleState {
  isRedirect: boolean; // Biến boolean bạn muốn quản lý
  toggle: () => void; // Hàm để thay đổi trạng thái
  setRedirect: (value: boolean) => void; // Hàm để set giá trị cụ thể
}

const useStore = create<ToggleState>((set) => ({
  isRedirect: false, // Giá trị mặc định
  toggle: () => set((state) => ({ isRedirect: !state.isRedirect })), // Đảo trạng thái
  setRedirect: (value) => set({ isRedirect: value }), // Cập nhật trạng thái cụ thể
}));

export default useStore;
