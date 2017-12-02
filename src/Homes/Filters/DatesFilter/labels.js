export const toCheckinLabel = state =>
  state.selectedStartDate
    ? state.selectedStartDate.format("MMM Do")
    : "Check in";

export const toCheckoutLabel = state =>
  state.selectedEndDate ? state.selectedEndDate.format("MMM Do") : "Check out";

export const toDateLabel = (state, isShow) => {
  if (window.innerWidth < 768 && isShow) return "When";

  if (state.selectedStartDate && state.selectedEndDate)
    return `${toCheckinLabel(state)} — ${toCheckoutLabel(state)}`;

  if (state.selectedStartDate) return toCheckinLabel(state);

  return "Dates";
};
