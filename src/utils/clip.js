import Vue from "vue";
import Clipboard from "clipboard";

function clipboardSuccess() {
    Vue.prototype.$message.success('复制成功');
}

function clipboardError() {
    Vue.prototype.$message.error('复制失败');
}

export default {
    handleClipboard(text, event) {
        const clipboard = new Clipboard(event.target, {
            text: () => text
        });
        clipboard.on("success", () => {
            clipboardSuccess();
            clipboard.off("error");
            clipboard.off("success");
            clipboard.destroy();
        });
        clipboard.on("error", () => {
            clipboardError();
            clipboard.off("error");
            clipboard.off("success");
            clipboard.destroy();
        });
        clipboard.onClick(event);
    },

    handleClipTargetboard(target, event) {
        const clipboard = new Clipboard(event.target, {
            target: () => target
        });
        clipboard.on("success", () => {
            clipboardSuccess();
            clipboard.off("error");
            clipboard.off("success");
            clipboard.destroy();
        });
        clipboard.on("error", () => {
            clipboardError();
            clipboard.off("error");
            clipboard.off("success");
            clipboard.destroy();
        });
        clipboard.onClick(event);
    }
};
