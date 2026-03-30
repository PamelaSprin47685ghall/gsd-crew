import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import type { CrewManager } from "./crew-manager.js";
import { registerCrewCommand } from "./integration/register-command.js";
import { registerCrewMessageRenderers } from "./integration/register-renderers.js";
import { registerCrewTools } from "./integration/register-tools.js";

export function registerCrewIntegration(pi: ExtensionAPI, crewManager: CrewManager): void {
	registerCrewTools(pi, crewManager);
	registerCrewCommand(pi, crewManager);
	registerCrewMessageRenderers(pi);
}
