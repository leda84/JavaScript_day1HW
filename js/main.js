//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string1, array1){
    for(let i = 0; i < array1.length; i++){
        if(string1.includes(array1[i])){
            console.log("Matched dog_name")
        }else{
            console.log("No Matches")
        }
    }return 'all done'
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(replacement){
    for(let i = 0; i < arr.length; i++){
        ( i % 2 == 0) ? arr.splice(i,1, replacement) : arr[i]
    }
    return arr
}
console.log(replaceEvens('even index'))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]