import AsyncStorage from "@react-native-async-storage/async-storage";

const CREDENTIALS_KEY = "credentials";

export async function saveCredential(vc) {
  const existing = await AsyncStorage.getItem(CREDENTIALS_KEY);
  const list = existing ? JSON.parse(existing) : [];

  list.push(vc);
  await AsyncStorage.setItem(CREDENTIALS_KEY, JSON.stringify(list));
}

export async function getCredentials() {
  const data = await AsyncStorage.getItem(CREDENTIALS_KEY);
  return data ? JSON.parse(data) : [];
}
