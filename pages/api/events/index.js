import Events from './data.json';
export default function (req, res) {
  res.status(200).json(Events);
}
