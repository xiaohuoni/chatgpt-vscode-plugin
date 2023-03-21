# iChatGPT VSCode Extension

大部分代码均来自 [ChatGPT VSCode Extension](https://github.com/barnesoir/chatgpt-vscode-plugin) - A VS code plugin for ChatGPT built by ChatGPT。我是基于这个插件做的修改。主要修改的是视图部分的内容。视图来自 [chatfish](https://charfish.io)。我就是个缝合大师。这是一个为我自己编写的 ChatGPT 插件，很高兴你能选择使用它，如果它对你有所帮助，或者你需要一些其他的功能，你可以联系我。


## Install the plugin from the [VSCode MarketPlace](https://marketplace.visualstudio.com/items?itemName=xiaohuoni.i-chatgpt)


## Features

#### Commands:

中文：

- `iChatGPT:查询`（将提示您提出问题）
- `iChatGPT:添加测试`（根据文件/文本选择生成测试）
- `iChatGPT:为什么我的代码被破坏了？`（分析代码以突出显示任何逻辑/语法错误）
- `iChatGPT:解释代码`
- `iChatGPT:重构器`
- `iChatGPT:设置API密钥`（设置您的 API 密钥，首次使用时自动提示）

_在编辑器中右键单击时，上下文菜单中除了『设置 API 密钥』和『查询』之外的所有内容都可用_

英文：

- `iChatGPT: Query` (will provide a prompt for you to ask a question)
- `iChatGPT: Add tests` (generates tests based on file/text selection)
- `iChatGPT: Why is my code broken?` (analyses your code to highlight any logic/syntax errors)
- `iChatGPT: Explain code`
- `iChatGPT: Refactor`
- `iChatGPT: Set API Key` (set's your API key, auto promted on first use)

_Everything except Reset Token and Query are available from the context menu when right-clicking in the editor._

![image](https://user-images.githubusercontent.com/38425102/206071229-f017247e-831b-4e42-8c1a-914851da392f.png)

## 用法

打开 VSCode 命令板(mac 快捷键 command + Shift + P)并键入 `iChatGPT:设置 API Key`，输入你的 OpenAI API密钥，可以在 https://openai.com/account/api-keys 申请。

打开 VSCode 命令板(mac 快捷键 command + Shift + P)并键入 `iChatGPT:设置代理`，如果你没有“魔法”。输入你的代理地址，使用之后不需要翻墙，可以参考这里 https://github.com/noobnooc/noobnooc/discussions/9 自己搭建，或者找某些大魔法师请教。

_通过身份验证后，您可以向ChatGPT询问任何问题，并提供当前文件/选择中的源代码_

## 帮助

如果你在使用这个插件的时候，需要帮助，请联系我。

## Credits

- [ChatGPT VSCode Extension](https://github.com/barnesoir/chatgpt-vscode-plugin) - A VS code plugin for ChatGPT built by ChatGPT
- [ChatGPT](https://chat.openai.com/chat) - The large language model trained by OpenAI that was used to generate this README file
- [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api/) - The original NPM used prior to the offical library
- [mpociot's extension](https://github.com/mpociot/chatgpt-vscode) - Inspiration for the project and the original webview panel
- [Gencay's extension](https://github.com/gencay/vscode-chatgpt) - Ported version of Gencay's webview panel.
- [Yeoman](https://yeoman.io/) - The code generator used to scaffold the extension project
- [VS Code Extension Generator](https://github.com/Microsoft/vscode-generator-code) - The Yeoman generator for creating VS Code extensions

## 赞助

如果觉得这个插件对你有帮助，你可以请我和一杯咖啡，万分感谢。

<image src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc6b8ae7f61546ea8074dcd75a2844bf~tplv-k3u1fbpfcp-watermark.image?" style="width:350px"/>

## 交流群

<image src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe9c6b33d2b742e6babf172d54c8ce5d~tplv-k3u1fbpfcp-watermark.image?" style="width:250px"/>

[264626657](https://jq.qq.com/?_wv=1027&k=pA1gHVhB)