pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'mocha'
            }
        }  

  
         stage('run') {
            steps {
            
                sh 'forever -w start 201314715.js'
            }
        }
    }
}
