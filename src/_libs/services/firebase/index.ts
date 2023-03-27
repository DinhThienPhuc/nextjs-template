import { FirebaseApp, initializeApp } from "firebase/app";

import { IFirebaseConfig } from "./types";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

export const initFirebaseApp = (config: IFirebaseConfig) => {
  return initializeApp(config);
};

export const getFireStore = (app: FirebaseApp) => {
  return getFirestore(app);
};

export const getFireStorage = (app: FirebaseApp) => {
  return getStorage(app);
};
