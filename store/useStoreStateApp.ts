import {create} from "zustand";

interface StateApp {
  isCompleteTransitionPage: boolean; 
  toggle: () => void; 
  setIsCompleteTransitionPage: (value: boolean) => void; 
}

const useStoreStateApp = create<StateApp>((set) => ({
  isCompleteTransitionPage: false,
  toggle: () => set((state) => ({ isCompleteTransitionPage: !state.isCompleteTransitionPage })), 
  setIsCompleteTransitionPage: (value) => set({ isCompleteTransitionPage: value }),
}));

export default useStoreStateApp;
