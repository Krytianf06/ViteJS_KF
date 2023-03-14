import { create } from 'zustand'

const useBearStore = create((set) => ({
    orange: 0,
    violet: 0,
    imie:"",
    setOrange: () => set((state) => ({ orange: state.orange + 1 })),
    setViolet: () => set((state) => ({ violet: state.violet + 1 })),
    setImie: (ev) => set(() => ({ imie: ev.target.value })),
    removeAllBears: () => set({ orange: 0, violet: 0, imie: "" }),
    removeText: () => set({imie:""}),
}))

export default useBearStore;