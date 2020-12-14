export class Actions {

  private readonly MAX_DELAY = 7000;
  private readonly MAX_LOAD_DURATION = 9000;

  async delayFor(milliseconds?: number): Promise<number> {
    const delay = Math.min(this.MAX_DELAY, milliseconds || 9999);
    return new Promise((resolve: (number) => void) =>
        setTimeout(() => resolve(delay), delay)
    );
  }

  async cpuLoadFor(milliseconds?: number): Promise<number> {
    const delay = Math.min(this.MAX_LOAD_DURATION, milliseconds || 9999) / 1000;
    const seconds = Math.round(delay);

    console.time('cpu blocking...');
    for (let i = 1; i < seconds * 8e8 ; i++);
    console.timeEnd('cpu blocking...');

    return seconds;
  }

  async hello(): Promise<string> {
    return 'hello';
  }
}
