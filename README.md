# Remap

Remap is a VSCode extension that takes common functions and puts them within different modes that can be quickly toggled on or off. It is similar to Vscode Vim, but it places functions in positions that actually make sense and groups similar functions together. No more holding down ctrl or moving your hand to the arrow keys!

## Installation

Currently, Remap is not published on the VSCode extension marketplace. To install:

1. Download the .vsix file.
2. Select "Extensions" in VSCode.
3. Open the "More Action" menu (three dots on the top) and click "Install from VSIX…"
4. Find the downloaded .vsix file and select.
5. Reload VSCode.

## Usage

When you first enable the extension, you are in Edit mode. In this mode, you can type and use your keyboard normally. Normal mode is the main mode of Remap and can be toggled on or off with `Esc` by default. (I recommend disabling `Capslock` and binding it to `Esc` using something like Autohotkey).

Once Normal mode is enabled, you can move the cursor with `i`, `j`, `k`, `l`; undo and redo with `z` and `x`; copy, paste, and cut with `c`, `v`, `b`; indent and unindent with `,` and `.`, and much more.

Select mode is used for selecting a block of text. To toggle it on or off, press `a` while in Normal mode. Inside select mode, you can move the cursor similarly to `Normal mode`, except that all the text will be selected as you move. You can go straight to Edit mode by pressing `Esc` again.

## Extension Settings

This extension contributes the following settings:

* `remap.mode`: The current mode. `0` is edit mode, `1` is normal mode, and `2` is select mode.
* `remap.changeStatusBarText`: When enabled, the extension will add a text item in the status bar that will show the current mode.
* `remap.changeStatusBarColor`: When enabled, the extension will change the color of the status bar based on the current mode.
* `remap.editModeColor`: The color of the status bar while in Edit mode when `remap.changeStatusBarColor` is enabled.
* `remap.normalModeColor`: The color of the status bar while in Normal mode when `remap.changeStatusBarColor` is enabled.
* `remap.selectModeColor`: The color of the status bar while in Select mdoe when `remap.changeStatusBarColor` is enabled.

## Releases

### Pre-release v0.1.2

More bugfixes and pressing delete while in select mode will now delete selection.

### Pre-release v0.1.1

Minor bugfixes.

### Pre-release v0.1.0

Basic functions now work.

### Pre-release v0.0.1

Initial commit.
