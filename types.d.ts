export interface message {
	message: string;
	datetime: string;
}

export type messageWithOutDate = Omit<message, 'datetime'>;