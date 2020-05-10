export class TestResult {
  get success(): boolean {
    return this._success;
  }

  get response(): string {
    return this._response;
  }

  private _success: boolean;
  private _response: string;

  constructor(success: boolean, response: string) {
    this._success = success;
    this._response = response;
  }
}