// local meaning we don't want it to be accessible to others
const secret = 'super secret'

// share meaning we want to give its access and given in bottom via exports list
const musa = 'musa'
const ali = 'ali'

//console.log(module)  // this shows the detail of module, the most importat is the exports that is null list
module.exports = {musa, ali}    // this exports musa/ali variables & can now be used in file where it is required