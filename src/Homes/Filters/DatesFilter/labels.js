export const toCheckinLabel = state =>
  state.selectedStartDate
    ? state.selectedStartDate.format("MMM Do")
    : "Check in";

export const toCheckoutLabel = state =>
  state.selectedEndDate ? state.selectedEndDate.format("MMM Do") : "Check out";

export const toDateLabel = state => {
  if (state.selectedStartDate && state.selectedEndDate)
    return `${toCheckinLabel(state)} — ${toCheckoutLabel(state)}`;

  if (state.selectedStartDate) return toCheckinLabel(state);

  return "Dates";
};

export const priceLabel = () => "Price";
export const instantLabel = () => "Instant booking";
export const guestsLabel = () => "Guests";
export const roomLabel = () => "Room type";
export const moreLabel = () => "More filters";
