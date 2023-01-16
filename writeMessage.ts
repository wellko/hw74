import {promises as fs} from 'fs';
import {message} from "./types";



const writeMessage = async (message: message, date: string) => {
	const fileName = './messages/' + date + '.txt';

	try {
		await fs.writeFile(fileName, message.message);
	} catch (err) {
		console.error(err);
	}
};

export default writeMessage;