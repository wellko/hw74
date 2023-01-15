import express from "express";
import writeMessage from "../writeMessage";

const messagesRouter = express.Router();

messagesRouter.get('/', (req, res) => {
	res.send('List of products will be here');
});

messagesRouter.post('/', (req, res) => {
	const date = new Date().toISOString();

	writeMessage(req.body, date);
	res.send({...req.body, datetime: date});
});

export default messagesRouter;