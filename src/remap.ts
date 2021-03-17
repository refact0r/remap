import * as vscode from 'vscode';
import StatusBar from './statusbar';

export default class Remap {
    public statusBar: StatusBar;
    public mode: number;

    public constructor(prevColorConfig: vscode.WorkspaceConfiguration) {
        this.statusBar = new StatusBar(prevColorConfig);
        this.mode = Number(vscode.workspace.getConfiguration('remap').get('mode'));
    }

    public toggleNavMode() {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        let mode: number = Number(config.get('mode'));
        if (mode < 2) {
            mode = 1 - mode;
            } else if (mode >= 2) {
                mode = 1;
        }
        this.mode = mode;
        config.update('mode', mode, true);
        if (config.get('changeStatusBarText')) {
            this.statusBar.statusBarTextMode(mode);
        }
        if (config.get('changeStatusBarColor')) {
            this.statusBar.statusBarColorMode(mode);
        }
    }

    public toggleSelectMode() {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        let mode: number = Number(config.get('mode'));
        if (mode === 2) {
            mode = 1;
        } else {
            mode = 2;
        }
        this.mode = mode;
        config.update('mode', mode, true);
        if (config.get('changeStatusBarText')) {
            this.statusBar.statusBarTextMode(mode);
        }
        if (config.get('changeStatusBarColor')) {
            this.statusBar.statusBarColorMode(mode);
        }
    }
}