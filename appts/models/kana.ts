export class Kana {
    private _rome: string;
    private _hiragana: string;
    private _katakana: string;
    private _type: string;
    constructor(rome: string, hiragana: string, katakana: string, type: string) {
        this._rome = rome;
        this._hiragana = hiragana;
        this._katakana = katakana;
        this._type = type;
    }
    public get type(): string {
        return this._type;
    }
    public get rome(): string {
        return this._rome;
    }
    public get hiragana(): string {
        return this._hiragana;
    }
    public get katakana(): string {
        return this._katakana;
    }


}