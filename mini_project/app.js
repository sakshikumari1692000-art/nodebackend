import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log('\nTodo List Menu:');
    console.log('1. Add Todo');
    console.log('2. View Todos');
    console.log('3. Exit');
    rl.question('Choose an option (1-3): ', handleInput);
}

const handleInput = (option) => {
    switch (option) {
        case '1':
            rl.question('Enter a todo item: ', (todo) => {
                todos.push(todo);
                console.log(`Todo "${todo}" added.`);
                showMenu();
            });
            break;
        case '2':
            console.log('\nTodo List:');
            todos.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo}`);
            });
            showMenu();
            break;
        case '3':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please choose again.');
            showMenu();
    }
};  

showMenu();