# Istio workshop

[Istio](https://istio.io/) is an open platform to connect, secure, control
and observe microservices, also known as a service mesh, on cloud platforms
such as Kubernetes.

With Istio, you can manage network traffic, load balance across microservices,
enforce access policies, verify service identity, secure service communication,
and observe what exactly is going on with your services.

## Requirements

* [Docker](https://www.docker.com/)

## Objectives

After you complete this course, you'll be able to:

* Download and install Istio in your cluster
* Deploy the Guestbook sample app
* Use metrics, logging, and tracing to observe services
* Set up the Istio Ingress Gateway
* Perform simple traffic management, such as A/B tests and canary deployments
* Secure your service mesh
* Enforce policies for your microservices

## Workshop

You will perform the following exercises in the lab:

* [Lab 1 - Create VMs in OpenStack](lab-01/README.md)
* [Lab 2 - Install Kubernetes to the VMs](lab-02/README.md)
* [Lab 3 - Install Helm, Rook and ElasticSearch](lab-03/README.md)
* [Lab 4 - Install Istio](lab-04/README.md)
* [Lab 5 - Istio example](lab-05/README.md)
* [Lab 6 - Cleanup](lab-06/README.md)

::: tip
In case you turned off the servers or restart your computer please verify you
have the following up and running:
:::

```bash
[ -f $PWD/kubeconfig.conf ] && export KUBECONFIG=${KUBECONFIG:-$PWD/kubeconfig.conf}
kubectl get nodes -o wide
```

## List of GUIs used in Workshop

* [Jaeger](https://www.jaegertracing.io/) - [https://istio.io/docs/tasks/telemetry/distributed-tracing/](https://istio.io/docs/tasks/telemetry/distributed-tracing/)

  * ```shell
    kubectl port-forward -n istio-system $(kubectl get pod -n istio-system \
    -l app=jaeger -o jsonpath="{.items[0].metadata.name}") 16686:16686 &
    ```

    * Link: [http://localhost:16686](http://localhost:16686)

* [Prometheus](https://prometheus.io/) - [https://istio.io/docs/tasks/telemetry/querying-metrics/](https://istio.io/docs/tasks/telemetry/querying-metrics/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=prometheus -o jsonpath="{.items[0].metadata.name}") 9090:9090 &
    ```

  * Link: [http://localhost:9090/graph](http://localhost:9090/graph)

* [Grafana](https://grafana.com/) - [https://istio.io/docs/tasks/telemetry/using-istio-dashboard/](https://istio.io/docs/tasks/telemetry/using-istio-dashboard/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=grafana -o jsonpath="{.items[0].metadata.name}") 3000:3000 &
    ```

  * Link: [http://localhost:3000/dashboard/db/istio-mesh-dashboard](http://localhost:3000/dashboard/db/istio-mesh-dashboard)

* [Kiali](https://www.kiali.io/) - [https://istio.io/docs/tasks/telemetry/kiali/](https://istio.io/docs/tasks/telemetry/kiali/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=kiali -o jsonpath="{.items[0].metadata.name}") 20001:20001 &
    ```

  * Login: admin

  * Password: admin

  * Link: [http://localhost:20001](http://localhost:20001)

* Servicegraph - [https://istio.io/docs/tasks/telemetry/servicegraph/](https://istio.io/docs/tasks/telemetry/servicegraph/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=servicegraph -o jsonpath="{.items[0].metadata.name}") 8088:8088 &
    ```

  * Link: [http://localhost:8088/force/forcegraph.html](http://localhost:8088/force/forcegraph.html),
    [http://localhost:8088/dotviz](http://localhost:8088/dotviz)

* [Kibana](https://www.elastic.co/products/kibana)

  * ```shell
    kubectl -n logging port-forward $(kubectl -n logging get pod \
    -l role=kibana -o jsonpath="{.items[0].metadata.name}") 5601:5601 &
    ```

  * Link: [https://localhost:5601](https://localhost:5601)

* [Cerbero](https://github.com/lmenezes/cerebro)

  * ```shell
    kubectl -n logging port-forward $(kubectl -n logging get pod \
    -l role=cerebro -o jsonpath="{.items[0].metadata.name}") 9000:9000 &
    ```

  * Link: [http://localhost:9000](http://localhost:9000)

* [Ceph Dashboard](http://docs.ceph.com/docs/mimic/mgr/dashboard/)

  * ```shell
    kubectl -n rook-ceph port-forward $(kubectl -n rook-ceph get pod \
    -l app=rook-ceph-mgr -o jsonpath="{.items[0].metadata.name}") 8443:8443 &
    ```

  * Login: admin

  * Password:
    ```shell
    kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o yaml \
    | grep "password:" | awk '{print $2}' | base64 --decode
    ```

  * Link: [https://localhost:8443/ceph-dashboard](https://localhost:8443/ceph-dashboard)

## Links

* Video:

  * [Istio Service Mesh by Mete Atamel @ .NET Conf UY v2018](https://www.youtube.com/watch?v=sh0F7FMFVSI)

  * [Liam White - Istio @ GDGReading DevFest 2018](https://www.youtube.com/watch?v=RVScqW8_liw)

  * [Istio Service Mesh & pragmatic microservices architecture - Álex Soto](https://www.youtube.com/watch?v=OAW5rbttic0)

* Pages:

  * [Introduction - Istio 101 Lab](https://istio101.gitbook.io/lab/workshop/)

  * [Using Istio Workshop by Layer5.io](https://github.com/leecalcote/istio-service-mesh-workshop)

  * [Istio Workshop by Ray Tsang](https://github.com/retroryan/istio-workshop)

  * [Amazon EKS Workshop - Service Mesh with Istio](https://eksworkshop.com/servicemesh/)