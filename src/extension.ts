import * as vscode from 'vscode';
import { Remap }  from './remap';
import { actions } from './actions';

let prevColorConfig: vscode.WorkspaceConfiguration;

export function activate(context: vscode.ExtensionContext): void {

	console.log('Congratulations, your extension "remap" is now active!');

	console.log(context);

	prevColorConfig = vscode.workspace.getConfiguration('workbench.colorCustomizations');

	const remap = new Remap(prevColorConfig);

	for (const action of actions) {
		context.subscriptions.push(vscode.commands.registerCommand(action.name, () => {
			action.func(remap);
		}));
	}
}

export function deactivate(): void {
	vscode.workspace.getConfiguration().update('workbench.colorCustomizations', prevColorConfig, true);
}
