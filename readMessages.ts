import {promises as fs} from 'fs';
import {message} from "./types";

const path = './messages';

const readMessages = async () => {
	let response: message[] = [];
	try {
		const files = await fs.readdir(path);
		const userFiles = files.slice(-5);
		for (const file of userFiles) {
			const fileInfo = await fs.readFile(path + '/' + file, {encoding: 'utf8'});
			const result = {
				message: fileInfo,
				datetime: file.slice(0, -4)
			}
			response.push(result);
		}
		return response
	} catch (err) {
		console.error(err);
	}

};

export default readMessages;