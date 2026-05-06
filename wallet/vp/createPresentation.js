import * as vc from "@digitalbazaar/vc";
import {Ed25519Signature2020} from "@digitalbazaar/ed25519-signature-2020";
import {documentLoader} from "../utils/documentLoader";
import {getOrCreateDID} from "../crypto/keys";

export async function createPresentation({credential, challenge, domain}) {
  if (!challenge || !domain) {
    throw new Error("Both challenge and domain are required for VP signing.");
  }

  const {keyPair} = await getOrCreateDID();

  const suite = new Ed25519Signature2020({
    key: keyPair
  });

  const presentation = {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiablePresentation"],
    verifiableCredential: [credential],
    holder: keyPair.controller
  };

  return vc.signPresentation({
    presentation,
    suite,
    challenge,
    domain,
    documentLoader
  });
}
