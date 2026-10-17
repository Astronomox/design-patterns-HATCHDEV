"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WindowsButton {
    handler = null;
    render() {
        console.log("[Windows] Drawing a native OS button");
    }
    onClick(handler) {
        console.log("[Windows] Binding a native click event");
        this.handler = handler;
    }
}
class HTMLButton {
    handler = null;
    render() {
        console.log("[Web] Rendering <button>OK</button>");
    }
    onClick(handler) {
        console.log("[Web] Adding a browser 'click' listener");
        this.handler = handler;
    }
}
class MacButton {
    handler = null;
    render() {
        console.log("[macOS] Drawing a blue default button");
    }
    onClick(handler) {
        console.log("[macOS] Binding click + Return key (default button)");
        this.handler = handler;
    }
}
class Dialog {
    render() {
        const okButton = this.createButton();
        okButton.onClick(() => this.close());
        okButton.render();
    }
    close() {
        console.log("Dialog closed");
    }
}
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}
class WebDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    }
}
class MacDialog extends Dialog {
    createButton() {
        return new MacButton();
    }
    render() {
        console.log("[macOS] Sliding the dialog down as a sheet");
        super.render();
    }
}
class Application {
    dialog;
    constructor(config) {
        this.dialog = Application.chooseDialog(config.platform);
    }
    static chooseDialog(platform) {
        switch (platform) {
            case "windows":
                return new WindowsDialog();
            case "web":
                return new WebDialog();
            case "mac":
                return new MacDialog();
            default: {
                const unknown = platform;
                throw new Error(`Unknown platform: ${String(unknown)}`);
            }
        }
    }
    run() {
        this.dialog.render();
    }
}
new Application({ platform: "windows" }).run();
new Application({ platform: "web" }).run();
new Application({ platform: "mac" }).run();
//# sourceMappingURL=dialog.js.map