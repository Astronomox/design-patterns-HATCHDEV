"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WindowsButton {
    render() {
        console.log("Rendering a Windows-style button.");
    }
    onClick(callback) {
        console.log("Registering a Windows button click handler.");
    }
}
class HTMLButton {
    render() {
        console.log("Rendering an HTML button.");
    }
    onClick(callback) {
        console.log("Registering an HTML button click handler.");
    }
}
class Dialog {
    render() {
        const okButton = this.createButton();
        okButton.onClick(() => {
            this.closeDialog();
        });
        okButton.render();
    }
    closeDialog() {
        console.log("Closing the dialog.");
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
class Application {
    dialog;
    initialize(os) {
        if (os === "Windows") {
            this.dialog = new WindowsDialog();
        }
        else {
            this.dialog = new WebDialog();
        }
    }
    main() {
        this.dialog.render();
    }
}
const windowsApp = new Application();
windowsApp.initialize("Windows");
windowsApp.main();
const webApp = new Application();
webApp.initialize("Web");
webApp.main();
//# sourceMappingURL=dialog.js.map