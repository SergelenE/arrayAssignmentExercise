/* Bodlogo 4 */
let student1Courses = ['Математик' , 'Англи хэл' , 'Програмчлал'];
let student2Courses = ['Газарзүй' , 'Испани хэл' , 'Програмчлал'];

let i = 0;
while(i<3){
    let j = 0;
    while(j<3){
        if(student1Courses [i] === student2Courses [j]){
            console.log(student1Courses [i]);
        }
        j++;
    }
    i++;
}