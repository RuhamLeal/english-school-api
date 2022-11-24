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
find product by ID: http://15.228.199.125:3001/products/${id}            
find sale by ID: http://15.228.199.125:3001/sales/${id}     
delete a sale: http://15.228.199.125:3001/sales/${id}  with delete method      
delete a product: http://15.228.199.125:3001/products/${id}  with delete method     

Project have more endpoints, install repo and see more !

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

Populate database with scripts:    
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
