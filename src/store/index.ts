import { createStore, createTypedHooks, persist } from "easy-peasy";
import { RTLModel, rtlModel } from "./models/rtl";

interface StoreModel {
  rtl: RTLModel;
}

export const storeModel: StoreModel = {
  rtl: persist(rtlModel, { storage: "localStorage" }),
};

export const store = createStore<StoreModel>(storeModel);

// store.persist.clear().then(() => {
//   console.log("Persisted state has been removed");
// });

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
