import * as vscode from 'vscode';
import StatusBar from './statusbar';

export default class Remap {
    public statusBar: StatusBar;
    public mode: number;

    public constructor(prevColorConfig: vscode.WorkspaceConfiguration) {
        this.statusBar = new StatusBar(prevColorConfig);
        this.mode = Number(vscode.workspace.getConfiguration('remap').get('mode'));
    }

    public updateMode(mode: number) {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        this.mode = mode;
        config.update('mode', mode, true);
        if (config.get('changeStatusBarText')) {
            this.statusBar.statusBarTextMode(mode);
        }
        if (config.get('changeStatusBarColor')) {
            this.statusBar.statusBarColorMode(mode);
        }
    }

    public toggleNormalMode() {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        let mode: number = Number(config.get('mode'));
        if (mode < 2) {
            mode = 1 - mode;
        } else if (mode >= 2) {
            mode = 0;
        }
        this.updateMode(mode);
    }

    public toggleSelectMode() {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        let mode: number = Number(config.get('mode'));
        if (mode === 2) {
            mode = 1;
        } else {
            mode = 2;
        }
        this.updateMode(mode);
    }

    public toggleDeleteMode() {
        let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
        let mode: number = Number(config.get('mode'));
        if (mode === 3) {
            mode = 1;
        } else {
            mode = 3;
        }
        this.updateMode(mode);
    }

    public up() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorUp');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorUpSelect');
        }
    }

    public left() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorLeft');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorLeftSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteLeft');
        }
    }

    public down() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorDown');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorDownSelect');
        }
    }

    public right() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorRight');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorRightSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteRight');
        }
    }

    public leftWord() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorWordLeft');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorWordLeftSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteWordLeft');
        }
    }

    public rightWord() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorWordRight');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorWordRightSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteWordRight');
        }
    }

    public lineStart() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorHome');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorHomeSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteAllLeft');
        }
    }

    public lineEnd() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('cursorEnd');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('cursorEndSelect');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('deleteAllRight');
        }
    }

    public newLine() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('editor.action.insertLineAfter');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('editor.action.insertLineAfter');
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('editor.action.deleteLines');
        }
    }

    public undo() {
        vscode.commands.executeCommand('undo');
    }

    public redo() {
        vscode.commands.executeCommand('redo');
    }

    public copy() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('editor.action.clipboardCopyAction');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('editor.action.clipboardCopyAction');
            this.updateMode(1);
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('editor.action.clipboardCopyAction');
        }
    }

    public paste() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            this.updateMode(1);
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        }
    }

    public cut() {
        if (this.mode === 1) {
            vscode.commands.executeCommand('editor.action.clipboardCutAction');
        } else if (this.mode === 2) {
            vscode.commands.executeCommand('editor.action.clipboardCutAction');
            this.updateMode(1);
        } else if (this.mode === 3) {
            vscode.commands.executeCommand('editor.action.clipboardCutAction');
        }
    }

    public outdent() {
        vscode.commands.executeCommand('editor.action.indentLines');
    }

    public indent() {
        vscode.commands.executeCommand('editor.action.outdentLines');
    }
}