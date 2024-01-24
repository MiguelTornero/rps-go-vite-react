const BASE_BACKEND_URL = new URL(import.meta.env.VITE_BACKEND_BASE || "http://localhost:5000/")

BASE_BACKEND_URL.pathname = "createGame"
export const createGameURL = BASE_BACKEND_URL.toString()

BASE_BACKEND_URL.pathname = "connect"
if (BASE_BACKEND_URL.protocol === "https:") {
    BASE_BACKEND_URL.protocol = "wss:"
}
else {
    BASE_BACKEND_URL.protocol = "ws:"
}
export const connectURL = BASE_BACKEND_URL.toString()