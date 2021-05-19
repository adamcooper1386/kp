# Step one: create ubuntu instance with k8 user

I used the vultr app to create the instance and followed this guide to set up the k8 user
user with password authentication. I chose a 2cpu 2k ram instance as a compromise between small/large instances.
The plan is to use one master and 2 worker nodes through the alpha and upgrade to a 8 node setup when we start the beta and beyond, adding nodes as needed.
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04

# Step two: Docker

K8 obviously needs docker installed so i'll follow https://docs.docker.com/engine/install/ubuntu/ and the follow up steps to run docker as the k8 user. Make sure and do the post install step and make docker run able as the k8 user.

# Step Three: prereqs

Have to open the ports on the master and worker nodes. They have different port requirements so make sure and do them seperately.

kubeadm join 144.202.125.224:6443 --token r401ab.1wlsvxbgaucdh2dw \
	--discovery-token-ca-cert-hash sha256:2b1cdebbc9b5de7f05978384730b6f3fe278c27f3a102bc07a6272f0f29c6ae5


sudo ufw insert 1 allow from 104.154.63.253

	# Code fresh runner
60a1e5aa4abe3cd7d41d1482.159f4a9a23a22c953071e0055fbc79f0


# master node 1b
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 45.77.69.159:6443 --token dltdo9.yda05tcvq7b5chf8 \
	--discovery-token-ca-cert-hash sha256:fd85941657acf6d14161a864a44ecae217830d7e69acfed9f1fd0bf1c6919849

