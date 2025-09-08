pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    triggers {
        pollSCM('H/5 * * * *')  
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Rohith-VoltusWave/playwright-allure.git',
                    credentialsId: 'Rohithjenkins'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure-commandline generate ./allure-results --clean -o ./allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: "allure-results"]]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/allure-report/**', allowEmptyArchive: true
        }
        failure {
            echo '❌ Build failed because some tests did not pass!'
        }
        success {
            echo '✅ All tests passed!'
        }
    }
}
