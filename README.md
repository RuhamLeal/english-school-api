# english-school-api

An api that manages a school, where there are students, teachers, classes and learning levels. You can add, update, find and delete specific persons and the same for classes.    

This Project use node.js, express, mysql, sequelize, and has the Model, Viw and Controller architecture.


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Tests](#tests)
- [Contact](#contact)

## Getting Started

This API was developed by me and it works with a mysql database, it works locally so you need to download the repository       



BASE URL: http://localhost:3001

SOME ENDPOINTS:    
persons: http://localhost:3001/pessoas to show all active persons.        
persons: http://localhost:3001/pessoas/all to show all persons.      
persons: (post) http://localhost:3001/pessoas to add a new student ou teacher
classes: http://localhost:3001/pessoas/matricula/:classId/confirmadas to show all the people enrolled in a specific class            
classes: http://localhost:3001/turmas to show all classes        
classes: http://localhost:3001/turmas/:id  to show a class by its ID     
persons:  (post) http://localhost:3001/pessoas/:studentId/cancela  to cancel a active person                
persons:  (post) http://localhost:3001/pessoas/:id/restore to restore a person             

### Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version         
MySQL 5.7 version or 8.0 version              

### Installation  

Clone the repo:     
```
git clone https://github.com/RuhamLeal/english-school-api.git    
```

Go to project folder:     
```
cd english-school-api   
```

Install dependencies:     
```
npm install    
```

Populate database with commands:    
```
npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all   
```

Run server:
```
npm run dev    
```             
### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
