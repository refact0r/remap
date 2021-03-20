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

	context.subscriptions.push(vscode.commands.registerCommand('remap.toggleDeleteMode', () => { 
		app.toggleDeleteMode(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.up', () => {
		app.up();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.left', () => {
		app.left();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.down', () => { 
		app.down(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.right', () => {
		app.right();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.leftWord', () => {
		app.leftWord();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.rightWord', () => { 
		app.rightWord(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.lineStart', () => {
		app.lineStart();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.lineEnd', () => {
		app.lineEnd();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.newLine', () => { 
		app.newLine(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.undo', () => {
		app.undo();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.redo', () => {
		app.redo();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.copy', () => { 
		app.copy(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.paste', () => {
		app.paste();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.cut', () => {
		app.cut();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.outdent', () => { 
		app.outdent(); 
	}));

	context.subscriptions.push(vscode.commands.registerCommand('remap.indent', () => { 
		app.indent(); 
	}));
}

export function deactivate() {
	vscode.workspace.getConfiguration().update('workbench.colorCustomizations', prevColorConfig, true);
}
