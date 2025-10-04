export const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Z9qr_sYzrLLXqumcIMUS1huliypJ6MVaxh0gAbCFPZ8r8d4AesOdSXWIqOMMjG3oY3q_KpjKz?gv=true"

export function openSchedulingPopup() {
  const event = new CustomEvent("open-scheduling-modal")
  window.dispatchEvent(event)
}


