import { Action, action, computed, Computed } from "easy-peasy";

export interface RTLModel {
  enabled: boolean;
  toggle: Action<RTLModel>;
  direction: Computed<RTLModel, string>;
}

export const rtlModel: RTLModel = {
  enabled: false,
  toggle: action((state) => {
    console.log("s", state.enabled);

    state.enabled = !state.enabled;
  }),
  direction: computed((state) => (state.enabled ? "rtl" : "ltr")),
};
