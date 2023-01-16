import express from "express";
import writeMessage from "../writeMessage";
import readMessages from "../readMessages";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
	const data = await readMessages();
	res.send(data);
});

messagesRouter.post('/', async (req, res) => {
	const date = new Date().toISOString();
	void await writeMessage(req.body, date);
	res.send({...req.body, datetime: date});
});

export default messagesRouter;