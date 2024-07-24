import { Manifest } from "deno-slack-sdk/mod.ts";
import { GenerateAIResponse } from "./functions/generate_ai_response.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "custom-ai-function",
  description: "Craft a custom AI function",
  icon: "assets/default_new_app_icon.png",
  functions: [GenerateAIResponse],
  workflows: [],
  outgoingDomains: ["api.openai.com"],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
  ],
});
