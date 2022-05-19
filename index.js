const operations = require('./db/contacts.js')
const { Command } = require('commander');
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({action, id, email, name, phone}) => {
    switch (action) {
        case 'list':
            const data = await operations.listContacts();
            console.log('list:', data);
            break;
        case 'get':
            const contact = await operations.getContactById(id);
            console.log('get:', contact);
            break;
        case 'add':
            await operations.addContact(email, name, phone);
            break;
        case 'remove':
            await operations.removeContact(id);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
