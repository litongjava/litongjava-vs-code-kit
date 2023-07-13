const vscode = require('vscode');

function activate(context) {

  console.log('Congratulations, your extension "litongjava-vs-code-kit" is now active!');

  let disposable = vscode.commands.registerCommand('extension.mergeIntoOneLine', function () {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);

    // replace newline and multiple spaces with a single space
    let singleLine = text.replace(/\s\s+/g, ' ');

    editor.edit((editBuilder) => {
      editBuilder.replace(selection, singleLine);
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate
}
