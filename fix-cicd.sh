#!/bin/bash
echo "íº€ Complete CI/CD Fix"
echo "===================="

echo "1. Installing dependencies..."
npm install

echo ""
echo "2. Testing build..."
if CI=false npm run build 2>/dev/null; then
    echo "âœ… Build successful!"
else
    echo "âŒ Build failed"
    echo "Trying clean install..."
    rm -rf node_modules package-lock.json
    npm install
    CI=false npm run build
fi

echo ""
echo "3. Creating complete workflow..."
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy Portfolio to S3

on:
  push:
    branches: [main]

env:
  AWS_REGION: us-east-1
  S3_BUCKET: my-portfolio-website-prod-suhail

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: CI=false npm run build
      
      - name: Configure AWS
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}
      
      - name: Deploy to S3
        run: aws s3 sync ./build/ s3://${{ env.S3_BUCKET }} --delete
      
      - name: Show URL
        run: |
          echo "âœ… Deployment successful!"
          echo "í¼ Visit: http://${{ env.S3_BUCKET }}.s3-website-${{ env.AWS_REGION }}.amazonaws.com"
