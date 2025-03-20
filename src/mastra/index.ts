import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { githubAnalysisAgent, smartCheatsheetAgent } from "./agents";

export const mastra = new Mastra({
	agents: {
		githubAnalysisAgent,
		smartCheatsheetAgent,
	},
	logger: createLogger({
		name: "GitHub Analysis Agent",
		level: "info",
	}),
});
