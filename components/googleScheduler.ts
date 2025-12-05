export const CLASSIC_SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2JSblHLarI-8265xED0s68ramEfpt5PA7ShCL1II3He3GwpfhM8Fl5aS4Ro6C-9gT4txLJjeCl?gv=true"

export const FREE_SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Z9qr_sYzrLLXqumcIMUS1huliypJ6MVaxh0gAbCFPZ8r8d4AesOdSXWIqOMMjG3oY3q_KpjKz?gv=true"

export function openSchedulingPopup(url: string) {
  const event = new CustomEvent("open-scheduling-modal", { detail: { url } })
  window.dispatchEvent(event)
}

export function openClassicSchedulingPopup() {
  openSchedulingPopup(CLASSIC_SCHEDULE_URL)
}

export function openFreeSchedulingPopup() {
  openSchedulingPopup(FREE_SCHEDULE_URL)
}


