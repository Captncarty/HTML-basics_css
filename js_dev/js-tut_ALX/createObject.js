const per = {
name: ['bob', 'smith'],
age: 21,
bio: function () {
         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
     },
introduceSelf: function () {
                   console.log(`Hi I'm ${this.name[0]}.`);
               }
};

per.name;
per.name[0];
per.age;
per.bio();
per.introduceSelf();
