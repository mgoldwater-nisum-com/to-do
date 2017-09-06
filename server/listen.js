import {app, port} from './server';
import open from 'open';

app.listen(port, () => {
  open('http://localhost:' + port);
  console.log(`App is listening on port ${port}`); // eslint-disable-line no-console
});