import {EventEmitter} from 'events';

class AutoUpdater extends EventEmitter implements Electron.AutoUpdater {
  updateURL!: string;
  quitAndInstall() {
    this.emitError('QuitAndInstall unimplemented');
  }
  getFeedURL() {
    return this.updateURL;
  }

  setFeedURL(options: Electron.FeedURLOptions) {
    this.updateURL = options.url;
  }

  emitError(error: string | Error) {
    if (typeof error === 'string') {
      error = new Error(error);
    }
    this.emit('error', error);
  }
}

export default new AutoUpdater();
