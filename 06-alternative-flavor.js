// there are two ways to export variables, one way is shown where list/array is exported and 
// another is shown where object is exported

//const items = ['item1', 'item2']              // list/array
module.exports.items = ['item1', 'item2']       // let's export the list/array directly with declarations

const person = {                                // object
    name: 'Ahmad',
}
module.exports.singlePerson = person            // let's export person object
                                                // note it can be exported directly like items list/array