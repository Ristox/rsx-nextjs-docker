export class Actions {

  private readonly MAX_DELAY = 7000;
  private readonly MAX_LOAD_DURATION = 25000;

  async delayFor(milliseconds?: number): Promise<number> {
    const delay = Math.min(this.MAX_DELAY, milliseconds || 9999);
    return new Promise((resolve: (number) => void) =>
        setTimeout(() => resolve(delay), delay)
    );
  }

  async cpuLoadFor(milliseconds = this.MAX_LOAD_DURATION): Promise<number> {
    const delay = Math.min(this.MAX_LOAD_DURATION, milliseconds);
    const seconds = Math.ceil(delay/1000);

    console.time('cpu blocking...');
    const start = new Date().getTime();
    for (let i = 0; i < seconds * 1e7 ; i++) {
      if (new Date().getTime() - start > delay) {
        break;
      }
    }
    console.timeEnd('cpu blocking...');

    return delay;
  }

  async hello(): Promise<string> {
    return 'hello';
  }
}
