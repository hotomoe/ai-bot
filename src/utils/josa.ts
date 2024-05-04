export default function(word: string, t: string, f: string): string {
	const c = word.charCodeAt(word.length-1);
	return (c-44032)%28 ? `${word}${f}` : `${word}${t}`;
}
