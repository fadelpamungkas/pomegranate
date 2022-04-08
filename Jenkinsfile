pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker compose build server' 
            }
        }
        stage('Test') { 
            steps {
                sh 'docker compose run server npm test' 
                sh 'docker-compose run server npm run build'
            }
        }
    }
}