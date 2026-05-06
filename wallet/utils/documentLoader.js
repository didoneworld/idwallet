import {securityLoader} from "@digitalbazaar/security-document-loader";
import {contexts as credentialsContexts} from "@digitalbazaar/credentials-context";
import {contexts as ed25519Contexts} from "@digitalbazaar/ed25519-signature-2020-context";

const loader = securityLoader();

for (const [url, context] of credentialsContexts.entries()) {
  loader.addStatic(url, context);
}

for (const [url, context] of ed25519Contexts.entries()) {
  loader.addStatic(url, context);
}

export const documentLoader = loader.build();
