let obj = {
  'firstName': 'Abc',
  'Lname':'xyz',
  'school':{
    'elementary':{
      'name':'abcSchool',
      'place':'abcPlace'
    }
  }
};

//let newObj =[...obj]

const newfun = function (obj){
for(let x in obj){
  console.log(typeof(x))
}
}