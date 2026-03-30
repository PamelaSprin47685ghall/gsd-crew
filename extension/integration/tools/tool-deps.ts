import type {
	ExtensionAPI,
	ExtensionContext,
} from "@mariozechner/pi-coding-agent";
import type { AgentDiscoveryWarning } from "../../agent-discovery.js";
import type { CrewManager } from "../../crew-manager.js";

export interface CrewToolDeps {
	pi: ExtensionAPI;
	crewManager: CrewManager;
	notifyDiscoveryWarnings: (
		ctx: ExtensionContext,
		warnings: AgentDiscoveryWarning[],
	) => void;
}
