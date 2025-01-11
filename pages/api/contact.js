import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }
    const newMessage = {
      email,
      name,
      message
    }

    let client;
    try {
      client = await MongoClient.connect('mongodb+srv://asaeri3:Asaeri33@cluster0.muwol.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0');
    } catch (error) {
      res.status(500).json({message: 'Could not connect to database'});
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      client.close();
      res.status(201).json({message: 'Successfully stored your message!', data: newMessage});
    } catch (error) {
      client.close();
      res.status(500).json({message: 'Could not store message in database'});
      return;
    }
  }
}

export default handler;
