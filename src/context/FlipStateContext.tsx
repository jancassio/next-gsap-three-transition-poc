"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react"

interface ContextAPI {
  set: (key: string, state: Flip.FlipState) => void
  get: (key: string) => Flip.FlipState | undefined
}

const Context = createContext<ContextAPI>({
  set() {
    throw new Error("context not created")
  },
  get() {
    throw new Error("context not created")
  },
})

function useCreateStore(): ContextAPI {
  const [store, setStore] = useState(new Map<string, Flip.FlipState>())

  return {
    set(key: string, state: Flip.FlipState) {
      store.set(key, state)
      setStore(new Map(store.set(key, state)))
    },

    get(key: string) {
      return store.get(key)
    },
  }
}

export function useFlipState() {
  return useContext(Context)
}

export function FlipStateProvider(props: PropsWithChildren) {
  const store = useCreateStore()
  return <Context.Provider value={store}>{props.children}</Context.Provider>
}
