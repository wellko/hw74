import {promises as fs} from 'fs';
import {message} from "./types";
import { existsSync } from 'node:fs';



const writeMessage = async (message: message, date: string) => {
	const fileName = './messages/' + date + '.txt';

	try {
		if (!existsSync('./messages')){
			await fs.mkdir('./messages');
		}
		await fs.writeFile(fileName, message.message);
	} catch (err) {
		console.error(err);
	}
};

export default writeMessage;