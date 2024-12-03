import mongoose from 'mongoose';
import config from './app/config';
import app from './app';



const port= config.port||3000
async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    // app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`);
    // });
    app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
  } catch (err) {
    console.log(err);
  }
}

main();
