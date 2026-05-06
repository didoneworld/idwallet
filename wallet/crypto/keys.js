import * as Keychain from "react-native-keychain";
import {Ed25519VerificationKey2020} from "@digitalbazaar/ed25519-verification-key-2020";

const KEYCHAIN_SERVICE = "idwallet.did";

export async function getOrCreateDID() {
  const existing = await Keychain.getGenericPassword({service: KEYCHAIN_SERVICE});

  if (existing?.password) {
    return JSON.parse(existing.password);
  }

  const keyPair = await Ed25519VerificationKey2020.generate();
  const did = keyPair.controller;

  await Keychain.setGenericPassword("did", JSON.stringify({did, keyPair}), {
    service: KEYCHAIN_SERVICE
  });

  return {did, keyPair};
}
