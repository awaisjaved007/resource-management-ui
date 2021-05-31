# How to RUN


###Pre-requisite:

* Minikube installation


### After cloning from git mv into 

cd ./resource-manager


### Docker image creation

docker build -t assignment/resource-management-ui:1.0.0 .


### Create Kubernetes Deployment Service

kubectl create -f ./k8/

### find url of rms-service-ui
minikube service rms-service --url

To work with backend container we have to update the /etc/hosts file with output ip of previous command.
as per following

192.168.1.1 rms-service

192.168.1.1 rms-service-ui

### Access of UI application
http://rms-service-ui:30088


##Extra commands
kubectl exec --stdin --tty pod -- /bin/bash