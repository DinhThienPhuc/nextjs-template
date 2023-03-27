import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "@firebase/firestore";
import { TTryCatchResult, logger, tryDo } from "@iris/utils";

export const getAllDocuments = async <T>(
  firestore: Firestore,
  c: string,
): Promise<TTryCatchResult<T>> => {
  const collectionRef = collection(firestore, c);
  const { error, result } = await tryDo(getDocs(collectionRef));

  const items = result?.docs?.map?.((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as T;

  if (error) {
    logger.error(error);
  }

  return {
    error,
    result: items,
  };
};

export const getDocumentById = async <T>(
  firestore: Firestore,
  c: string,
  id: string,
): Promise<TTryCatchResult<T>> => {
  const documentRef = doc(firestore, c, id);
  const { error, result } = await tryDo(getDoc(documentRef));

  if (error) {
    logger.error(error);
  }

  return {
    error,
    result: result?.data() as T,
  };
};

export const addDocument = async <T>(
  firestore: Firestore,
  c: string,
  data: DocumentData,
): Promise<TTryCatchResult<T>> => {
  const collectionRef = collection(firestore, c);
  const { error, result } = await tryDo(addDoc(collectionRef, data));

  if (error) {
    logger.error(error);
  }

  return {
    error,
    result: result as T,
  };
};

export const setDocument = async (
  firestore: Firestore,
  c: string,
  data: DocumentData,
): Promise<TTryCatchResult<void>> => {
  const documentRef = doc(firestore, c, data.id);
  const { error, result } = await tryDo(
    setDoc(documentRef, data, { merge: true }),
  );

  if (error) {
    logger.error(error);
  }

  return {
    error,
    result,
  };
};

export const deleteDocument = async (
  firestore: Firestore,
  c: string,
  id: string,
): Promise<TTryCatchResult<void>> => {
  const documentRef = doc(firestore, c, id);
  const { error, result } = await tryDo(deleteDoc(documentRef));

  if (error) {
    logger.error(error);
  }

  return {
    error,
    result,
  };
};
