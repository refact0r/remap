import * as vscode from 'vscode';
import Remap from './remap';

let prevColorConfig: vscode.WorkspaceConfiguration;

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "remap" is now active!');

	prevColorConfig = vscode.workspace.getConfiguration('workbench.colorCustomizations');

	const app = new Remap(prevColorConfig);

	context.subscriptions.push(vscode.commands.registerCommand('remap.showMode', () => {
		vscode.window.showInformationMessage(String(app.mode));
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.toggleNormalMode', () => {
		app.toggleNormalMode();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.toggleSelectMode', () => {
		app.toggleSelectMode();
	}));
}

export function deactivate() {
	vscode.workspace.getConfiguration().update('workbench.colorCustomizations', prevColorConfig, true);
}
