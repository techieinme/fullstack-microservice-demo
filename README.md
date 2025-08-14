docker build -t auth-service ./auth-service
docker build -t user-service ./user-service
docker build -t product-service ./product-service



kubectl apply -f k8s/


kubectl get services

