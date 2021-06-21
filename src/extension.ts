import * as vscode from "coc.nvim";
import { activateDiagnostics } from "./diagnostics";
import { activateNotify } from "./notify";

// Extension activation
export function activate(context: vscode.ExtensionContext) {
  activateDiagnostics(context);
  activateNotify(context);
}
