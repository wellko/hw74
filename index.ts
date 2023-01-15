import express from 'express';
import messagesRouter from "./routers/messages";

const app = express();

const port = 8000;

app.use(express.json());

app.use('/messages', messagesRouter);

app.listen(port, () => {
	console.log(`Server started on ${port} port!`);
});

