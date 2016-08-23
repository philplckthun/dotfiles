module.exports = {
  config: {
    fontSize: 12,
    fontFamily: '"Fira Code", Monoid, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    cursorColor: 'rgba(189, 195, 199, .8)',
    css: `
      header {
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.17);
      }
    `,
    padding: '0',

    overlay: {
      animate: false,
      alwaysOnTop: true,
      hashShadow: false,
      hideOnBlur: false,
      hideDock: false,
      hotkeys: ['CommandOrControl+Z'],
      resizable: false,
      position: 'top',
      primaryDisplay: false,
      startup: true,
      size: 1,
      tray: false,
      unique: true
    }
  },

  plugins: [
    'hyperterm-draculicious',
    'hyperterm-title',
    'hyperterm-overlay',
    'hyperterm-alternatescroll',
    'hyperterm-focus-reporting',
    'hyperterm-paste',
    'hyperterm-final-say'
  ],

  // `~/.hyperterm_plugins/local/`
  localPlugins: []
};
