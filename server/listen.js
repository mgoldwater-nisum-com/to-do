import {app, port} from './server';

app.listen(port, () => {
  open('http://localhost:' + port);
  console.log(`App is listening on port ${port}`); // eslint-disable-line no-console
});