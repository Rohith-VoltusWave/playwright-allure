pipeline {
  agent any

  tools {
    nodejs "NodeJS"   // must match your NodeJS tool in Jenkins
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        // Explicitly run .wtt files if needed
        sh 'npx playwright test tests/**/*.wtt --reporter=line,allure-playwright'
      }
    }
  }

  post {
    always {
      allure([
        includeProperties: false,
        jdk: '',
        results: [[path: 'allure-results']]
      ])
    }
  }
}
