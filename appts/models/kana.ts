export class Kana {
    constructor(private rome: string, private hiragana: string, private katakana: string) { }
    public Rome(): string {
        return this.rome;
    }
    public Hiragana(): string {
        return this.hiragana;
    }
    public Katakana(): string {
        return this.katakana;
    }
}