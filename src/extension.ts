import * as vscode from "vscode";
import ChatGptViewProvider from "./chatgpt-view-provider";

export async function activate(context: vscode.ExtensionContext) {
  const chatViewProvider = new ChatGptViewProvider(context);

  context.subscriptions.push(
    vscode.commands.registerCommand("i-chatgpt.askGPT", askChatGPTCn),
    vscode.commands.registerCommand("i-chatgpt.whyBroken", askGPTWhyBrokenCn),
    vscode.commands.registerCommand("i-chatgpt.explainPls", askGPTToExplainCn),
    vscode.commands.registerCommand("i-chatgpt.refactor", askGPTToRefactorCn),
    vscode.commands.registerCommand("i-chatgpt.addTests", askGPTToAddTestsCn),
    vscode.commands.registerCommand("i-chatgpt.resetToken", resetToken),
    vscode.commands.registerCommand("i-chatgpt.resetProxy", resetProxy),
    vscode.commands.registerCommand("i-chatgpt.askGPTEn", askChatGPT),
    vscode.commands.registerCommand("i-chatgpt.whyBrokenEn", askGPTWhyBroken),
    vscode.commands.registerCommand("i-chatgpt.explainPlsEn", askGPTToExplain),
    vscode.commands.registerCommand("i-chatgpt.refactorEn", askGPTToRefactor),
    vscode.commands.registerCommand("i-chatgpt.addTestsEn", askGPTToAddTests),
    vscode.commands.registerCommand("i-chatgpt.resetTokenEn", resetToken),
    vscode.commands.registerCommand("i-chatgpt.resetProxyEn", resetProxy),
    vscode.window.registerWebviewViewProvider(
      "i-chatgpt.view",
      chatViewProvider,
      {
        webviewOptions: { retainContextWhenHidden: true },
      }
    )
  );

  async function askChatGPTCn(userInput?: string) {
    await askChatGPT(userInput, true);
  }
  async function askGPTToExplainCn() {
    await askChatGPT("Can you explain what this code does?", true);
  }
  async function askGPTWhyBrokenCn() {
    await askChatGPT("Why is this code broken?", true);
  }
  async function askGPTToRefactorCn() {
    await askChatGPT(
      "Can you refactor this code and explain what's changed?",
      true
    );
  }
  async function askGPTToAddTestsCn() {
    await askChatGPT("Can you add tests for this code?", true);
  }

  async function askGPTToExplain() {
    await askChatGPT("Can you explain what this code does?");
  }
  async function askGPTWhyBroken() {
    await askChatGPT("Why is this code broken?");
  }
  async function askGPTToRefactor() {
    await askChatGPT("Can you refactor this code and explain what's changed?");
  }
  async function askGPTToAddTests() {
    await askChatGPT("Can you add tests for this code?");
  }

  async function resetToken() {
    await context.globalState.update("chatgpt-api-key", null);
    await chatViewProvider.ensureApiKey();
    // await vscode.window.showInformationMessage("Token reset, you'll be prompted for it next to you next ask ChatGPT a question.");
  }
  async function resetProxy() {
    await chatViewProvider.ensureProxyUrl();
    // await vscode.window.showInformationMessage("Token reset, you'll be prompted for it next to you next ask ChatGPT a question.");
  }

  async function askChatGPT(userInput?: string, useCnResponse?: boolean) {
    if (!userInput) {
      userInput =
        (await vscode.window.showInputBox({
          prompt: "Ask ChatGPT a question",
        })) || "";
    }

    let editor = vscode.window.activeTextEditor;

    if (editor) {
      const selectedCode = editor.document.getText(
        vscode.window.activeTextEditor?.selection
      );
      const entireFileContents = editor.document.getText();

      const code = selectedCode
        ? selectedCode
        : `This is the ${editor.document.languageId} file I'm working on: \n\n${entireFileContents}`;

      chatViewProvider.sendOpenAiApiRequest(
        userInput,
        // `${userInput}${useCnResponse ? "By Simplified Chinese." : ""}`,
        code
      );
    }
  }
}
