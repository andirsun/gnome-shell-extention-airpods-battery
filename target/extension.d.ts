declare const GETTEXT_DOMAIN = "my-indicator-extension";
declare const GObject: any, St: any;
declare const ExtensionUtils: any;
declare const Main: any;
declare const PanelMenu: any;
declare const PopupMenu: any;
declare const _: any;
declare const Indicator: any;
declare class Extension {
    constructor(uuid: any);
    enable(): void;
    disable(): void;
}
declare function init(meta: any): Extension;
