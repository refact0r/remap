# Remap

Remap is a VSCode extension that takes common functions and puts them within different modes that can be quickly toggled on or off. It is similar to Vscode Vim, but it places functions in positions that actually make sense and groups similar functions together. No more holding down ctrl or moving your hand to the arrow keys!

## Installation

Currently, Remap is not published on the VSCode extension marketplace. To install:

1. Go to Releases and find the latest release.
2. Download the .vsix file under that release.
3. Open the menu in the extensions tab (three dots on the top) and click "Install from VSIX…".
4. Find the downloaded .vsix file and select.
5. Reload VSCode.

## Usage

When you first enable the extension, you are in Edit mode. In this mode, you can type and use your keyboard normally. Normal mode is the main mode of Remap and can be toggled on or off with `Esc` by default. (I recommend disabling `Capslock` and binding it to `Esc` using something like Autohotkey).

Once Normal mode is enabled, you can move the cursor with `i`, `j`, `k`, `l`; undo and redo with `z` and `x`; copy, paste, and cut with `c`, `v`, `b`; outdent and indent with `,` and `.`, and much more (see "Keybinds").

Select mode is used for selecting text. In select mode, any cursor movements will be selected. Select mode can be toggled with the `a` key while in Normal mode.

Delete mode is used for deleting text. In Delete mode, any cursor movements will delete the character in that direction. Delete mode can be toggled with the `d` key. If `d` is pressed while in Select mode, the current selection will be deleted.

## Keybinds

These are the default keybinds. Keybinds can be changed in the VSCode's "Keyboard Shortcuts".

### Normal Mode

| Key | Function |
| - | - |
| Esc | Toggle edit mode |
| a | Toggle select mode |
| d | Toggle delete mode |
| f | Add new line |
| g | Go to line |
| i | Cursor up |
| j | Cursor left |
| k | Cursor down |
| l | Cursor right |
| u | Cursor left by word |
| o | Cursor right by word |
| h | Jump to start of line |
| ; | Jump to end of line |
| q | Save file |
| y | Find |
| z | Undo |
| x | Redo |
| c | Copy |
| v | Paste |
| b | Cut |
| , | Outdent |
| . | Indent |
| / | Comment line |

### Select Mode

| Key | Function |
| - | - |
| d | Delete selection |
| f | Add new line |
| i | Select up |
| j | Select left |
| k | Select down |
| l | Select right |
| u | Select left by word |
| o | Select right by word |
| h | Select to start of line |
| ; | Select to end of line |

Any other keybinds are the same as in Normal mode.

### Delete Mode

| Key | Function |
| - | - |
| f | Delete line |
| j | Delete left |
| l | Delete right |
| u | Delete left by word |
| o | Delete right by word |
| h | Delete to start of line |
| ; | Delete to end of line |

Any other keybinds are the same as in Normal mode.

## Extension Settings

This extension contributes the following settings:

* `remap.mode`: The current mode. `0` is edit mode, `1` is normal mode,  `2` is select mode, `3` is delete mode.
* `remap.changeStatusBarText`: When enabled, the extension will add a text item in the status bar that will show the current mode.
* `remap.changeStatusBarColor`: When enabled, the extension will change the color of the status bar based on the current mode.
* `remap.editModeColor`: The color of the status bar while in Edit mode when changing status bar color is enabled.
* `remap.normalModeColor`: The color of the status bar while in Normal mode when changing status bar color is enabled.
* `remap.selectModeColor`: The color of the status bar while in Select mode when changing status bar color is enabled.
* `remap.deleteModeColor`: The color of the status bar while in Delete mode when changing status bar color is enabled.

## Releases

### Pre-release v0.1.2

More bugfixes and pressing delete while in select mode will now delete selection.

### Pre-release v0.1.1

Minor bugfixes.

### Pre-release v0.1.0

Basic functions now work.

### Pre-release v0.0.1

Initial commit.
