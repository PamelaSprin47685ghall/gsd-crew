# Codebase Map

Generated: 2026-04-24T07:54:53Z | Files: 38 | Described: 0/38
<!-- gsd:codebase-meta {"generatedAt":"2026-04-24T07:54:53Z","fingerprint":"f9129875bb15746162c56c16ca0cbb3fb5d86a75","fileCount":38,"truncated":false} -->

### (root)/
- `.gitignore`
- `AGENTS.md`
- `LICENSE`
- `package.json`
- `README.md`
- `tsconfig.json`

### agents/
- `agents/code-reviewer.md`
- `agents/oracle.md`
- `agents/planner.md`
- `agents/quality-reviewer.md`
- `agents/scout.md`
- `agents/worker.md`

### assets/
- `assets/demo-video.mp4`

### docs/
- `docs/architecture.md`

### extension/
- `extension/agent-discovery.ts`
- `extension/bootstrap-session.ts`
- `extension/index.ts`
- `extension/integration.ts`
- `extension/status-widget.ts`
- `extension/subagent-messages.ts`
- `extension/tool-registry.ts`

### extension/integration/
- `extension/integration/register-command.ts`
- `extension/integration/register-renderers.ts`
- `extension/integration/register-tools.ts`
- `extension/integration/tool-presentation.ts`

### extension/integration/tools/
- `extension/integration/tools/crew-abort.ts`
- `extension/integration/tools/crew-done.ts`
- `extension/integration/tools/crew-list.ts`
- `extension/integration/tools/crew-respond.ts`
- `extension/integration/tools/crew-spawn.ts`
- `extension/integration/tools/tool-deps.ts`

### extension/runtime/
- `extension/runtime/crew-runtime.ts`
- `extension/runtime/delivery-coordinator.ts`
- `extension/runtime/overflow-recovery.ts`
- `extension/runtime/subagent-registry.ts`
- `extension/runtime/subagent-state.ts`

### prompts/
- `prompts/gsd-crew-plan.md`
- `prompts/gsd-crew-review.md`
