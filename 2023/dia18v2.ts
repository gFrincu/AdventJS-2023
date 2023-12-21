export function drawClock(time: string): string[][] {
	const NUMBERS: { [key: string]: number } = {
		'0': 0b111101101101101101111,
		'1': 0b100100100100100100100,
		'2': 0b111001001111100100111,
		'3': 0b111100100111100100111,
		'4': 0b100100100111101101101,
		'5': 0b111100100111001001111,
		'6': 0b111101101111001001111,
		'7': 0b100100100100100100111,
		'8': 0b111101101111101101111,
		'9': 0b111100100111101101111,
		':': 0b0010100
	}

	const SIGNS: string[] = [' ', '*']
	const timeSplit: string[] = time.split(':')
	const result: string[][] = [[], [], [], [], [], [], []]

	for (const [i, row] of result.entries()) {
		for (const num of timeSplit[0]) {
			const numberBits: number = NUMBERS[num];
			row.push(SIGNS[numberBits >>> (i * 3 + 0) & 1]);
			row.push(SIGNS[numberBits >>> (i * 3 + 1) & 1]);
			row.push(SIGNS[numberBits >>> (i * 3 + 2) & 1]);
			row.push(' ');
		}
		row.push(SIGNS[NUMBERS[':'] >>> i & 1]);
		for (const num of timeSplit[1]) {
			const numberBits: number = NUMBERS[num];
			row.push(' ');
			row.push(SIGNS[numberBits >>> (i * 3 + 0) & 1]);
			row.push(SIGNS[numberBits >>> (i * 3 + 1) & 1]);
			row.push(SIGNS[numberBits >>> (i * 3 + 2) & 1]);
		}
	}

	return result;
}
