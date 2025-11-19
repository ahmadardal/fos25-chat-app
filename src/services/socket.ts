import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../utils/constants";
// import { SOCKET_URL, SOCKET_PATH } from "../utils/constants";

let socket: Socket | null = null;

export const connectSocket = () => {
  socket = io(SOCKET_URL);
  return socket;
};

export const getSocket = () => socket;

  // socket = io(SOCKET_URL, { path: SOCKET_PATH });