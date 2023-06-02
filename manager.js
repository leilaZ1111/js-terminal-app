// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"]
let donetask = ['not yet done','not yet done','not yet done']

const showtasks = () => {
    for (let i=0;i<tasks.length;i++){
        console.log('Nbr' +i+ ' ' + tasks[i] + ' status ' + donetask[i])
    }
}

const addtasks = () => {
    rl.question('Please name your new task?', (name) => {
        tasks.push(name)
        donetask.push('not yet done')
        console.log(name + ' created !')
        menu()
    }
    )
}
// la fontion add tasq est maintenant définie

const deletetasks = () => {
    for (let i=0;i<tasks.length;i++){
        // console.log('1') checking for trouble
        console.log('Nbr' +i+ ' ' + tasks[i])
    }
    rl.question('Please type the number of the task to delete', (indexNbr) => {
        delete tasks[indexNbr]
        delete donetask[indexNbr]
        console.log('Your task has been deleted!')
        menu()
    }
    )
}

const chekingtasks = () => {
    for (let i=0;i<tasks.length;i++){
        // console.log('1') checking for trouble
        if (
            donetask[i]=='not yet done'
            // == comarateur, contrairement à réatribuer la valeur comme avec 1 seul = (maintenant ça vaut ça même si c'"tait pas le cas avant")
            // === de même nature
        )
        {
            console.log('Nbr' +i+ ' ' + tasks[i])
        }
        else {
            continue
            // si c'est pas ''not yet done'' on passe à l'itération suivante
        }
        
    }
    rl.question('Please type the number of the done task', (indexNbr) => {
        donetask[indexNbr]="done"
        // array[index]="done"
        console.log('Good job!')
        menu()
    }
    )
}


// const donetask = () => {
//     console.log()
// }

// const exitmanager = () => {
//     console.log()
// }

const menu = () => {
    tasks=tasks.filter(String)
    donetask=donetask.filter(String)
    fs.readFile('welcome.txt','utf-8',(err,data)=>{
    if (err) throw err;
    // permet d'afficher via txt le menu d'options autrement qu'en une ligne
 
    console.log(data.toString());
})

rl.question('', (option) => {
    switch(option){
        case "1" :
        showtasks()
        menu()
        break
        case "2" :
        addtasks()
        break
        case "3" :
        deletetasks()
        break
        case "4" :
        chekingtasks()
        break
        case "5" :
        rl.close()
    // permet de fermer si on entre une valeur non comprise dand mes options
        break
    }
    
})
}

menu()

// const showtasks = () => {
//     console.log(tasks)

// showtasks()
// appel de fonction, si je la met en comment, il ne se passe rien lorsque je lance node


// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });

// "Welcome to your task manager, Press:
// 1. to see all your tasks
// 2. to add a task
// 3. to delete a task
// 4. to mark a task as done
// 5. to Exit the task manager"