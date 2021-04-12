import * as vscode from 'vscode';
import { Remap }  from './remap';
import { Mode } from './mode';

export const actions = [
    {
        name: 'remap.toggleNormalMode',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Edit) {
                remap.updateMode(Mode.Normal);
            } else {
                remap.updateMode(Mode.Edit);
            }
        }
    },
    {
        name: 'remap.toggleSelectMode',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Select) {
                remap.updateMode(Mode.Normal);
            } else if (remap.mode != Mode.Edit) {
                remap.updateMode(Mode.Select);
            }
        }
    },
    {
        name: 'remap.toggleDeleteMode',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Delete) {
                remap.updateMode(Mode.Normal);
            } else if (remap.mode != Mode.Edit) {
                remap.updateMode(Mode.Delete);
            }
        }
    },
    {
        name: 'remap.save',
        func: (): void => {
            vscode.commands.executeCommand('workbench.action.files.save');
        }
    },
    {
        name: 'remap.up',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorUp');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorUpSelect');
            } else if (remap.mode == Mode.Delete) {
                const editor: vscode.TextEditor = vscode.window.activeTextEditor as vscode.TextEditor;
                const position = editor.selection.active;
                vscode.commands.executeCommand('cursorUp');
                vscode.commands.executeCommand('editor.action.deleteLines').then(() => {
                    editor.selection = new vscode.Selection(position.line - 1, position.character, position.line - 1, position.character);
                });
            }
        }
    },
    {
        name: 'remap.left',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorLeft');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorLeftSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('cursorLeft');
            }
        }
    },
    {
        name: 'remap.down',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorDown');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorDownSelect');
            } else if (remap.mode == Mode.Delete) {
                const editor: vscode.TextEditor = vscode.window.activeTextEditor as vscode.TextEditor;
                const position = editor.selection.active;   
                vscode.commands.executeCommand('cursorDown');
                vscode.commands.executeCommand('editor.action.deleteLines').then(() => {
                    editor.selection = new vscode.Selection(position.line, position.character, position.line, position.character);
                });
            }
        }
    },
    {
        name: 'remap.right',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorRight');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorRightSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('cursorRight');
            }
        }
    },
    {
        name: 'remap.leftWord',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorWordLeft');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorWordLeftSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('deleteWordLeft');
            }
        }
    },
    {
        name: 'remap.rightWord',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorWordRight');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorWordRightSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('deleteWordRight');
            }
        }
    },
    {
        name: 'remap.lineStart',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorHome');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorHomeSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('deleteAllLeft');
            }
        }
    },
    {
        name: 'remap.lineEnd',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('cursorEnd');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorEndSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('deleteAllRight');
            }
        }
    },
    {
        name: 'remap.newLine',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('editor.action.insertLineAfter');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('cursorHome');
                vscode.commands.executeCommand('cursorEndSelect');
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('editor.action.deleteLines');
            }
        }
    },
    {
        name: 'remap.find',
        func: (remap: Remap): void => {
            vscode.commands.executeCommand('actions.find');
            remap.updateMode(Mode.Edit);
        }
    },
    {
        name: 'remap.goToLine',
        func: (): void => {
            vscode.commands.executeCommand('workbench.action.gotoLine');
        }
    },
    {
        name: 'remap.undo',
        func: (): void => {
            vscode.commands.executeCommand('undo');
        }
    },
    {
        name: 'remap.redo',
        func: (): void => {
            vscode.commands.executeCommand('redo');
        }
    },
    {
        name: 'remap.copy',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('editor.action.clipboardCopyAction');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('editor.action.clipboardCopyAction');
                remap.updateMode(Mode.Normal);
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('editor.action.clipboardCopyAction');
            }
        }
    },
    {
        name: 'remap.paste',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('editor.action.clipboardPasteAction');
                remap.updateMode(Mode.Normal);
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            }
        }
    },
    {
        name: 'remap.cut',
        func: (remap: Remap): void => {
            if (remap.mode == Mode.Normal) {
                vscode.commands.executeCommand('editor.action.clipboardCutAction');
            } else if (remap.mode == Mode.Select) {
                vscode.commands.executeCommand('editor.action.clipboardCutAction');
                remap.updateMode(Mode.Normal);
            } else if (remap.mode == Mode.Delete) {
                vscode.commands.executeCommand('editor.action.clipboardCutAction');
            }
        }
    },
    {
        name: 'remap.indent',
        func: (): void => {
            vscode.commands.executeCommand('editor.action.indentLines');
        }
    },
    {
        name: 'remap.outdent',
        func: (): void => {
            vscode.commands.executeCommand('editor.action.outdentLines');
        }
    },
    {
        name: 'remap.comment',
        func: (): void => {
            vscode.commands.executeCommand('editor.action.commentLine');
        }
    },
    {
        name: 'remap.fold',
        func: (): void => {
            vscode.commands.executeCommand('editor.toggleFold');
        }
    },
]