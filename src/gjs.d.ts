// import "@gi-types/gjs-environment"
// import { imports } from "@gi-types/gjs-environment"

export {};

declare global {
  interface GjsGiImports {
    // Clutter: typeof import( "@gi-types/clutter10" );
    // Gdk: typeof import( "@gi-types/gdk3" ) | typeof import( "@gi-types/gdk4" );
    Gtk: typeof import( "@gi-types/gtk3" );
    // Meta: typeof import( "@gi-types/meta10" );
    // Shell: typeof import( "@gi-types/shell0" );
    // St: typeof import( "@gi-types/st1" );
  }
  
  interface GjsImports {
    misc: {
      // extensionUtils: {
      // 	getCurrentExtension(): {
      // 		imports: {
      // 			quakemodeapp: import( './quake-mode@repsac-by.github.com/quakemodeapp' ).types;
      // 			indicator: import('./quake-mode@repsac-by.github.com/indicator').types;
      // 			util: import( './quake-mode@repsac-by.github.com/util' ).types;
      // 		};
      // 	};
      // 	getSettings(): import('@gi-types/gio2').Settings;
      // 	gettext: typeof imports.gettext.gettext;
      // 	initTranslations(): void;
      // 	openPrefs(): void;
      // }
    }
    ui: {
      [key: string]: any;
      hola: boolean
    };
  }
}

