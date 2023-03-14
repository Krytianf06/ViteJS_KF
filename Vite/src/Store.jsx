import { create } from 'zustand'

const useBearStore = create((set) => ({
    orange: 0,
    violet: 0,
    setOrange: () => set((state) => ({ orange: state.orange + 1 })),
    setViolet: () => set((state) => ({ violet: state.violet + 1 })),
    removeAllBears: () => set({ orange: 0, violet: 0 }),
}))

export default useBearStore;