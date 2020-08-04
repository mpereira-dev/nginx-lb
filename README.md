#### Nginx Load Balancer Example
This is a simple example project of how you can sue Nginx as a load balancer in front of your application.

#### Quick Start
    docker-compose up

Go to localhost:8080 on your browser and watch the logs.
You will notice that your request is forwarded to a different app in a round robin fashion.

Try stopping everything then uncomment the ip_hash in the load-balancer nginx.conf file.
This load balancer strategy will cause request to be sent to the same app based on the client ip.
Start everything back up and examine the logs as you refresh the browser. You will notice that this
time around each of your requests is forwarded to the same app instance.