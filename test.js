/* 
    // rest parameter
    const summation = (...number) =>{
        let sum = 0;
        for(let val of number){
            sum += val;
        }
        //
            number.forEach(function(val){
                    sum += val;
            })
        //
        return sum;
    }

    console.log(summation(1,2,3,4,5,6,7,8,9));
*/

/*
    // Destructuring
    const colors = ["red1","green1","blue1"];
    const [,green,blue] = colors
    const customer = {
        tname : "tello",
        tsurname : "byebee",
        old : 50
    }

    // property:variable   
    const {tname:nname,tsurname:surname,old:customerold} = customer
    console.log("name => " ,nname);
    // or variable same name with property
    const {tname,old} = customer
    console.log("tname => " ,tname);
*/

/*  
// Default Parameter
    const useraddr = (username,addr = "water") =>{
        let detailaddr = `ชื่อลูกค้า => ${username}
        ชื่อที่อยู่ => ${addr}`
        return detailaddr
    }

    console.log(useraddr("sleep","here!"));
    console.log(useraddr("zoo"));
*/

/*
    // join (array to string), concat array
    const arr1 = [1,2,3]
    const arr2 = [4,5,6]
    console.log("arr1 => ",arr1);
    const result = arr1.join("*"); // 1*2*3
    console.log("string arr1 => ",result);
    const allarr = arr1.concat(arr2)
    console.log(allarr);
*/

/*
// push, pop <=== (lastindex),shift,unshift <=== (firstindex) array

const arr1 = [1,2,3];
console.log("basic ",arr1);

arr1.push(...[4,5,6]);
console.log("push ",arr1);

arr1.pop();
console.log("pop => ",arr1);

arr1.shift();
console.log("shift => ",arr1);

arr1.unshift(999);
console.log("unshift => ",arr1);
*/
/*
const arr1 = [1,2,3];
const arr2 = [...arr1,5,6,7];

console.log(arr2);
*/

/*
//Array Splice & Slice
// Splice(indexที่จะลบ,จำนวนที่จะลบ,ค่าที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ) เริ่มลบตั้งแต่ตำแหน่งที่ลบ
// Slice(indexเริ่มต้น,indexสุดท้ายที่ต้องการค่า+1) เอาค่าในช่วงที่ต้องการ
    const arr1 = [1,2,3,4,5,6];
    const arr2 = [...arr1];
    arr1.splice(1,3,100);
    console.log(arr1);

    const arrSlice = arr2.slice(1,3);
    console.log(arrSlice);
*/

/*
// ค้นหาข้อมูลใน array
// indexOf(ข้อมูล) ผลการค้นจะได้ index ไม่เจอได้ -1
// find(ข้อมูล) ผลการค้นจะได้ข้อมูลที่คนเจอ ถ้าไม่เจอได้ undefined
// findIndex(ข้อมูล) ผลการค้นจะได้ index ไม่เจอได้ -1


const arr1 = ["1","2","1","4"];
const arr2 = arr1.find(e=>e=="1");
console.log(arr2);
*/

/*
// Array map ดำเนินการกับค่าสมาชิกใน array => ต้องเอาค่าใส่ array ก้อนใหม่
const arr1 = [10,20,30,40];
const result = arr1.map(e=>{
    const a = e*2
    return a
})
console.log(result)

const name1 = ["rain","sun","snow","wind"];
const hi = name1.map((val,idx) => `day ${idx+1} weather ${val}`);

console.log(hi);

const data =[{num:1,data:"d1"},{num:2,data:"d2"},{num:3,data:"d3"}];
const num = data.map(e=>e.num)
console.log(num)
*/

/*
// filter array เอาเฉพาะค่าที่ตรงเงื่อนไขออกมา

const arr1 = [10,24,32,40]
const result = arr1.filter(e=> e%5==0);
console.log(result)

const data =[{num:10,data:"d1"},{num:23,data:"d2"},{num:35,data:"d1"},{num:42,data:"d3"}];
const num = data.filter(e=>e.num%5==0).filter(e=> e.data == "d1")
console.log(num);
*/

// reduce array => array.reduce((ค่าที่โดนประมวลผล,e)=>{},ค่าเริ่มต้น)
const arr1 = [10,20,30,40]
const result = arr1.reduce((val,e)=>{
    const result = e+val
    return result
},0)

console.log(result)


const arr3 = [10,20,30,10,20,40];

const result3 = arr3.filter((val,idx)=>{
    return arr3.indexOf(val) === idx
})
console.log(result3);