// Map
map = new Map()

// add key value pair in map
map.set("Navin", "Java")
map.set("Deepak", "Blockchain")
map.set("Chiku", "Drawing")
console.log(map)  //output  {
                        //     'Navin' => 'Java',
                        //     'Deepak' => 'Blockchain',
                        //     'Chiku' => 'Drawing'

// get all keys using .keys ()                        // }
console.log(map.keys()) //  output ==> [Map Iterator] { 'Navin', 'Deepak', 'Chiku' }

// get all valuse using  .values()
console.log(map.values()) // output ==> [Map Iterator] { 'Java', 'Blockchain', 'Drawing' }

// print keys and values using for each

map.forEach((key,value) => {
    console.log(key,value)
    
    // Java Navin
    // Blockchain Deepak
    // Drawing Chiku
    
});