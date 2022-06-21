import express from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser  } from '../controllers/users.js';


const router = express.Router();

let users = []


router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/',createUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)


/*router.get('/', (req, res) =>{
    //console.log(users)
    res.send(users)  
})*/

/*router.post('/', (req, res) => {
    //console.log('Post Route Reached')
    const user = req.body;
    //const userId = uuid()
    //const userWithId = {...user, id:uuid()}

    users.push({...user, id:uuid()})
    console.log(req.body);
    res.send('')
})*/

/*router.get('/:id', (req, res) =>{
    const { id } = req.params
    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser)
})*/

/*router.delete('/:id', (req, res) =>{
    const {id} = req.params
    users = users.filter((user) => user.id != id)
    res.send('user Deleted')
})*/


/*router.patch('/:id', (req, res) =>{
    const {id} = req.params
    const {firstName, lastName, age } = req.body

    const user = users.find((user) => user.id == id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age
    
    res.send('User has been Updated')
})*/
export default router;