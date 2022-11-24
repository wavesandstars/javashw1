//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let convert_string = dog_string.toLowerCase()
console.log(convert_string)

function findWords(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i]
        
        if ( value.includes(name.toLowerCase())) {
            console.log( `Matched ${name} name`)
        } else { 
            console.log('no match')}
    }

}
findWords(convert_string,dog_names)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}


console.log(replaceEvens(given_arr))


