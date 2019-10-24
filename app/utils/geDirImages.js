export default async imagen => {
 const directoryPath = path.join(__dirname, 'img');
            console.log(directoryPath);
            var img = [];

            // alert(process.argv[5].split('=')[1]);
            if (fs.statSync(`${directoryPath}/${e.imagen}`).isFile()) {
              let img = fs.readFileSync(`${directoryPath}/${e.imagen}`);
              //  console.log(Buffer.from(img).toString('base64'));
              var imagen64 = Buffer.from(img).toString('base64');

  return actor;
};
