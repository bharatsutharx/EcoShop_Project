# EcoShop - DevOps Implementation

## 🏗️ Application Architecture

EcoShop is a **React + Vite + Supabase + Zustand** frontend project with the following architecture:

```
Client (Browser)
      ⬇️
Vite React App (Frontend)
      ⬇️
Supabase (Database)
```

### 🖥️ Frontend (React + Vite)
- **Vite**: Used for fast builds.
- **React**: Manages UI components.
- **Zustand**: Handles global state.
- **Tailwind CSS**: Provides modern styling.

### 🔗 Backend (Supabase)
Supabase acts as a backend replacement:
- **Database**: PostgreSQL
- **Authentication**: OAuth, JWT
- **API access**: Managed via Supabase

### 🛠️ DevOps Stack
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube for local testing, EKS/GKE for cloud)
- **CI/CD**: Jenkins (Phase 1), GitHub Actions + ArgoCD (Phase 2)
- **Infrastructure as Code**: Terraform
- **Monitoring**: Prometheus, Grafana, Loki, Alertmanager
- **Cloud Provider**: AWS/GCP (EKS/GKE, S3, RDS, Route 53, etc.)

## DevOps implementation 


###  Containerization (Docker) : Build a lightweight, production-ready Docker image.

- Use a **multi-stage build** to minimize image size.
- Use **Nginx** to serve the frontend.
- pass **environment variables**.

---

### : CI/CD Pipeline - Jenkins (First Implementation) : Automate build, test, and Docker image push using Jenkins.

####  Jenkins Pipeline
- Trigger on **code push** to GitHub.
- Run **linting & tests**.
- Build **Docker image**.
- Push image to **Docker Hub**.

 **Final Pipeline Stages:**

| Stage               | Purpose                        |
|---------------------|--------------------------------|
| Linting & Tests     | Ensures clean code            |
| Build Frontend     | Creates production-ready build |
| Docker Build       | Packages the app in a container |
| Push to Docker Hub | Stores the container image     |
| Deploy to K8s      | Runs on Minikube / Cloud K8s   |

---

## Jenkins Prerequisites
Before setting up Jenkins CI/CD, ensure these prerequisites:

###  Install Jenkins & Plugins
Run Jenkins using Docker:

```sh
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```

 **Install Plugins in Jenkins:**
- Docker Pipeline Plugin (For building Docker images)
- NodeJS Plugin (For installing Node.js)
- Pipeline Plugin (For Jenkinsfile support)


###  Set Up Credentials in Jenkins
- **Docker Hub Credentials** (`dockerhub-user`, `dockerhub-pass`)
- **GitHub Credentials** (For repository access)

---


















### Kubernetes Deployment (Manual First, then GitOps with ArgoCD)

Deploy EcoShop to Kubernetes (Minikube for local, EKS/GKE for cloud).

####  Deploy Manually First
Kubernetes manifests for:
- **Deployment** (Frontend container)
- **Service** (Expose via NodePort or LoadBalancer)
- **Ingress** (Use Nginx)

**Deliverables:**
✔ `k8s/deployment.yaml`
✔ `k8s/service.yaml`
✔ `k8s/ingress.yaml`

---

###  GitOps CI/CD - GitHub Actions + ArgoCD
Implement GitOps for automated Kubernetes deployment.

#### implement GitHub Actions + ArgoCD

On every push:
- Build & push **Docker image**
- Update **Kubernetes manifests**
- **ArgoCD** syncs changes to the cluster

---

###  Infrastructure as Code (Terraform)
 Automate cloud infrastructure setup (AWS/GCP).

- Provision **EKS/GKE cluster**
- Set up **networking** (VPC, subnets, security groups)
- Create an **Elastic Load Balancer (ELB)**

---

### : Monitoring & Logging
Set up end-to-end observability for the application.

####  Integrate Monitoring Tools
- **Prometheus + Grafana** for metrics
- **Loki + Grafana** for logs
- **Alerting** via Alertmanager + Slack/Email

---

---
