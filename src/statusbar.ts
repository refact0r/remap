import * as vscode from 'vscode';

export class StatusBar {
    private item: vscode.StatusBarItem;
    private config: vscode.WorkspaceConfiguration;
    private prevColorConfig: vscode.WorkspaceConfiguration;

    public constructor(prevColorConfig: vscode.WorkspaceConfiguration) {
        this.item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        this.item.show()
        this.item.text = "-- EDIT --";
        this.config = vscode.workspace.getConfiguration();
        this.prevColorConfig = prevColorConfig;
    }

    public changeStatusBarColor(mode: number): void {
        let color: string = vscode.workspace.getConfiguration('remap').get('editModeColor') as string;
        if (mode === 1) {
            color = String(vscode.workspace.getConfiguration('remap').get('normalModeColor'))
        } else if (mode === 2) {
            color = String(vscode.workspace.getConfiguration('remap').get('selectModeColor'));
        } else if (mode === 3) {
            color = String(vscode.workspace.getConfiguration('remap').get('deleteModeColor'));
        }
        if (color) {
            this.config.update('workbench.colorCustomizations', {
                "statusBar.background": color,
                "statusBar.noFolderBackground": color,
                "statusBar.debuggingBackground": color,
            }, true);
        } else {
            this.config.update('workbench.colorCustomizations', this.prevColorConfig, true);
        }
    }

    public changeStatusBarText(mode: number): void {
        if (mode === 0) {
            this.item.text = "-- EDIT --";
        } else if (mode === 1) {
            this.item.text = "-- NORMAL --";
        } else if (mode === 2) {
            this.item.text = "-- SELECT --";
        } else if (mode === 3) {
            this.item.text = "-- DELETE --";
        }
    }
}