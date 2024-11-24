
import { create } from 'zustand';


interface TimelineStore {
  timelines: {

    pageLoaderEnter: gsap.core.Timeline | null;
    pageLoaderExit: gsap.core.Timeline | null;

    otherTimelines: Record<string, gsap.core.Timeline | null>; // Sử dụng Record<string, Timeline | null> để cho phép chỉ mục kiểu string
  };
  setTimeline: (key: 'pageLoaderEnter' | 'pageLoaderExit', timeline: gsap.core.Timeline) => void;
  getTimeline: (key: 'pageLoaderEnter' | 'pageLoaderExit') => gsap.core.Timeline | null;
  setOtherTimeline: (key: string, timeline: gsap.core.Timeline) => void; // Cập nhật kiểu key
  getOtherTimeline: (key: string) => gsap.core.Timeline | null; // Cập nhật kiểu key
  getAllTimelines: () => Record<string, gsap.core.Timeline | null>; // Cập nhật kiểu trả về
}

const useStoreTimeline = create<TimelineStore>((set, get) => ({
  timelines: {
    pageLoaderEnter: null,
    pageLoaderExit: null,
    otherTimelines: {
        '/home': null,
        '/work': null,
        '/about': null,
        '/service': null,
        '/contact': null,
      },
  },
  setTimeline: (key, timeline) =>
    set((state) => ({
      timelines: { ...state.timelines, [key]: timeline },
    })),
  getTimeline: (key) => get().timelines[key],
  setOtherTimeline: (key, timeline) =>
    set((state) => ({
      timelines: {
        ...state.timelines,
        otherTimelines: {
          ...state.timelines.otherTimelines,
          [key]: timeline,
        },
      },
    })),
  getOtherTimeline: (key) => get().timelines.otherTimelines[key],
  getAllTimelines: () => get().timelines.otherTimelines,
}));

export default useStoreTimeline;
