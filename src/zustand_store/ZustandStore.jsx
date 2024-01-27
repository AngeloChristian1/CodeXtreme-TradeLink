import { create } from "zustand";

export const useZustandStore = create((set) => ({

    authLoaded:false,
    authProfile:null,
    authToken:"",
    authRole:null,

    setAuthToken:(item)=> set(()=>({authToken:item})),
    setAuthProfile:(item)=> set(()=>({authProfile:item})),
    setAuthLoaded:(item)=> set(()=>({authLoaded:item})),
    setAuthRole:(item)=> set(()=>({authRole:item})),

  }))

