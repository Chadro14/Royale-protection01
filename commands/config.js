js
module.exports = {
  settings: {
    antivirus: true,
    antispam: true,
    antiban: true,
    antilink: true,
    antihack: true,
    protection: true
  },

  setOption(option, value) {
    if (this.settings.hasOwnProperty(option)) {
      this.settings[option] = value;
    }
  },

  getOption(option) {
    return this.settings[option];
  }
};
