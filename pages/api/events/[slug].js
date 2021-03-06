const { events } = require('./data.json');
export default function (req, res) {
  if (req.method === 'GET') {
    const evt = events.filter((ev) => ev.slug === req.query.slug);
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Mehtod ${req.method} is not allowed` });
  }
}
