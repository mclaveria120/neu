
# NODE MYSQL ANGULAR APP

I have divided the code in two components: 

1. Backend :
 * Endpoints
      - post: localhost:3000/api/login
      - post: localhost:3000/api/signup
      - post: localhost:3000/api/count
      - get : localhost:3000/api/counters
   You can check tool/ neu.postman_collection.json for more information.    
      
2. Frontend
 * Angular
 
 # Setup
1. MySql: Run tools/mysql.init 
2. Frontend: docker-compose up -d from tools/
2. Backend:  install node and run it: backend/app.js
