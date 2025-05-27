function busyPeriods(employees, locations, capacity){
    for(let location in locations){
        for( employee in employees){
            employee == location   
        }
    }
    if(employee.length < capacity){
        console.log("We need more employees")
    }
    else{
        console.log("Employees are enough")
    }
};
function labour(hoursWorked, salary, lawLabourHours){
    if(hoursWorked > lawLabourHours){
        let exceedingHours = hoursWorked - lawLabourHours;
        let newSalary = (exceedingHours * salary/100) + salary;
        console.log(newSalary)
    }
};
console.log(busyPeriods([{name: "Yordi", age: 21, skill: "customer care"}, {name: "Joy", age: 20, skill: "manager"}], ["Karen", "Umoja", "Kahawa West"], 20));
console.log(labour(14, 7000, 12));fun main() {
//    println(goodString("ababab"))
//    println(goodString("abbabba"))
//
//    println(charPercentage("arbitrary",'b'))
//    freq("I amin Akirachix")
//     println(reverseName("emeline"))
//     println(checkDuplicates(arrayOf(1,2,3,4,5,5)))
}
//Given a string,return tue if is a good string, or false otherwise. A string is good if all the characters that
//appear the smae time
//fun goodString(s:String):Boolean {
//    var occuranceMap = HashMap<Char, Int>()
//    for (c in s) {
//        var count = occuranceMap.getOrDefault(c, 0) //u can also use get() but since initially values don't exists in our hasmap we use getordefault
//        occuranceMap[c] = ++count
//
//    }
//    val values = occuranceMap.values.toList()
//    val first = values[0]
//    for (v in values) {
//        if (v != first){
//            return false
//    }
//  }
//  return true
//}
////Given a string s and a character x,return the percentage of x in a
//fun charPercentage(s: String, x:Char):Double{
//    var xcount = 0
//    for(c in s){
//        if(c == x){
//            xcount++
//        }
//    }
//    return(xcount.toDouble()/s.length)*100
//}
////A function that reverses a string
//fun reverseString(s: Array<Char>): Array<Char>{
//    var l = 0
//    var r = s.size-1
//    while (l<r){
//        var tmp = s[l]
//        s[l] = s[r]
//        s[r] = tmp
//        l++
//        r--
//    }
//    return  s
//}
//fun reverseName(name: String): String{
//    var l = 0
//    var r = name.length-1
//    val nameChars =name.toCharArray()
//    while(l < r){
//        val tmp = nameChars[l]
//        nameChars[l] = nameChars[r]
//        nameChars[r] = tmp
//        l++
//        r--
//
//    }
//    return  nameChars.joinToString()
//}
/////return true if any values appearmoremthantwice
//fun indistinctArray( nums:Array<Int> ): Boolean {
//
////    val set = nums.toSet()
////    return set.size < nums.size
//
//    //secondmethod
//    val occMaop = HashMap<Int, Int>()
//    for (n in nums) {
//        var ncount = occMaop.getOrDefault(n, 0)
//        occMaop[n] = ++ncount
//    }
//    val values = occMaop.toList()
//}

//given a feedback string, return the frequency of each word

//fun freq (feedback: String): HashMap<String, Int>{
//     val words =feedback.split(" ")
//     val frequencies = HashMap<String, Int>()
//    for(word in words){
//        var count = frequencies.getOrDefault(word,0)
//        frequencies[word] = ++count
//
//    }
//
//    return frequencies
//}

//Given n integer array of student IDs who accessed the platform today,return true if any ID is repeated
//fun checkDuplicates(studentsArray : Array<Int>): Boolean{
////    var arrayToSet =
//    return studentsArray.size == studentsArray.toSet().size
//}

data class  Passanger (var name :String, var idNumber: String)
data class Ticket(
     var passangerName : String,
     var passangerId : String,
     var departure : String,
     var seatNum : Int,
     var dateOfTravel :String,
     var busReg : String,
     var Fare :Int
)
class Bus (
     var regNo : String,
     var capacity : Int,
     var bookedSeats : Int
){
     fun book (passenger:Passanger, departure: String, destination: String, seatNum: Int,dateOfTravel: String){
          var availableSeats = capacity - bookedSeats
          if(availableSeats <= 0){
               println("No seats available")
               return null
          }

          if (seatNum in bookedSeats){
               println("seat is not available")
               return null
          }

          var ticket = Ticket (passenger.name, passenger.idNumber, )
     }
}