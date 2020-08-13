#### Nginx Load Balancer Example
This is a simple example project of how you can sue Nginx as a load balancer in front of your application.
This example also includes a deployment descriptor for Pivotal Cloud Foundry and some configuration options
that illustrate how PCF does the load balancing between multiple application instances for you out of the box.

#### Quick Start - Local

    docker-compose up

Go to localhost:8080 on your browser and watch the logs.
You will notice that your request is forwarded to a different app in a round robin fashion.

Try stopping everything then uncomment the ip_hash in the load-balancer nginx.conf file.
This load balancer strategy will cause request to be sent to the same app based on the client ip.
Start everything back up and examine the logs as you refresh the browser. You will notice that this
time around each of your requests is forwarded to the same app instance.


#### Pivotal Cloud Foundry

This project also includes a `manifest.yml` you can use to deploy the app to PCF. Simply login via the CLI and run the push command.
PCF exposes a route for your app and automatically load balances request to your app in a `round robin` fashion. Refresh your browser
on the exposed route and watch the response sycle through the app instances.

    cf push pcf-node-app

If you want to see the PCF `session affinity` in action go to your app > settings > user provided environment variables > reveal 
and set the `USE_SESSION` variable to true. Then restage or restart your app. When you navigate to the app via the exposed route
you will notice that you start hitting the same app instance with each refresh of the browser and the app will count the number
of times you have visited. You can examine the request in the browser network and notice the `set-cookie` header has a copule of values
including `JESSIONID` and `VACAP_ID` which PCF uses to route you to the same app instance. 

#### References
* https://docs.cloudfoundry.org/buildpacks/node/index.html
* https://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html
* https://docs.cloudfoundry.org/concepts/http-routing.html#sessions
* https://github.com/expressjs/cookie-session
* https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

Happy Coding :D ~!