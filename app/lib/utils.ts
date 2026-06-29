export function formatCarType (data:string) {
    return data.split("").map((letter,index)=>index===0?letter:letter.toLowerCase()).join("");
}