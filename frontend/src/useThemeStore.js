import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'coffee', // Default theme
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'streamify-theme', // Key for localStorage
    }
  )
);
