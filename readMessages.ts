import {promises as fs} from 'fs';
import {message} from "./types";
import pathMethod from 'node:path';
const path = './messages';



const readMessages = async () => {
	let response: message[] = [];
	try {
		const files = await fs.readdir(path);
		const userFiles = files.slice(-5);
		for (const file of userFiles) {
			const pathFile = path + '/' + file;

			const fileInfo = await fs.readFile(pathFile, {encoding: 'utf8'});
			const result = {
				message: fileInfo,
				datetime: pathMethod.parse(pathFile).name
			}
			response.push(result);
		}
		return response
	} catch (err) {
		console.error(err);
	}

};

export default readMessages;